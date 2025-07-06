import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import type { OutputAsset, OutputChunk, OutputBundle } from 'rollup'

function preserveDirectivesPlugin() {
  return {
    name: 'preserve-directives',
    transform(code: string, id: string) {
      if (
        !id.includes('node_modules') &&
        (id.endsWith('.ts') || id.endsWith('.tsx'))
      ) {
        const lines = code.split('\n')
        const directiveIndex = lines.findIndex(
          (line) =>
            line.trim().startsWith("'use client'") ||
            line.trim().startsWith('"use client"'),
        )

        if (directiveIndex >= 0) {
          return {
            code,
            map: null,
            meta: {
              directives: {
                client: true,
              },
            },
          }
        }
      }
      return null
    },
    renderChunk(code: string, chunk: any) {
      if (
        chunk.moduleIds.some(
          (id: string) =>
            id.includes('components/index') &&
            this.getModuleInfo(id)?.meta?.directives?.client,
        )
      ) {
        return {
          code: `'use client';\n${code}`,
          map: null,
        }
      }
      return null
    },
  }
}

function injectCssPlugin() {
  return {
    name: 'inject-css',
    generateBundle(_: unknown, bundle: OutputBundle) {
      let cssSource = ''
      for (const fileName in bundle) {
        if (fileName.endsWith('.css')) {
          const cssFile = bundle[fileName] as OutputAsset
          cssSource += cssFile.source
          delete bundle[fileName]
        }
      }

      if (cssSource) {
        this.emitFile({
          type: 'asset',
          fileName: 'index.css',
          source: cssSource,
        })

        for (const fileName in bundle) {
          const file = bundle[fileName]
          if (fileName.endsWith('.js') && 'isEntry' in file && file.isEntry) {
            const jsFile = file as OutputChunk
            // Check if directive already exists
            const existingDirective = jsFile.code.match(
              /^['"]use client['"];\n?/,
            )
            const metaDirective =
              this.getModuleInfo(fileName)?.meta?.directives?.client

            // Add directive if needed
            if (!existingDirective && metaDirective) {
              jsFile.code = `'use client';\n${jsFile.code}`
            }

            // Add CSS import after any directive
            jsFile.code = jsFile.code.replace(
              /^(['"]use client['"];\n?)?/,
              (match) =>
                match
                  ? `${match}import './index.css';\n`
                  : `import './index.css';\n`,
            )
          }
        }
      }
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    preserveDirectivesPlugin(),
    dts({
      include: ['src'],
      compilerOptions: {
        preserveSymlinks: true,
      },
    }),
  ],

  build: {
    minify: true,
    outDir: 'dist',
    lib: {
      entry: {
        'lsd-react': './src/index.ts',
        components: './src/components/index.ts',
      },
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsx',
        },
      },
      plugins: [injectCssPlugin(), preserveDirectivesPlugin()],
    },
  },
})
