import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import type { OutputAsset, OutputChunk } from 'rollup'

function preserveDirectivesPlugin() {
  return {
    name: 'preserve-directives',
    transform(code: string, id: string) {
      if (
        !id.includes('node_modules') &&
        (id.endsWith('.ts') || id.endsWith('.tsx'))
      ) {
        const directive = code.match(/^['"]use client['"];\n?/)?.[0]
        if (directive) {
          return {
            code,
            map: null,
            meta: { directives: { client: true } },
          }
        }
      }
    },
    renderChunk(code: string, chunk: { moduleIds: string[] }) {
      const hasDirective = chunk.moduleIds.some(
        (id) =>
          id.includes('components/index') &&
          this.getModuleInfo(id)?.meta?.directives?.client,
      )
      return hasDirective ? { code: `'use client';\n${code}`, map: null } : null
    },
  }
}

function injectCssPlugin() {
  return {
    name: 'inject-css',
    generateBundle(_: unknown, bundle: Record<string, unknown>) {
      const cssFiles = Object.entries(bundle)
        .filter(([name]) => name.endsWith('.css'))
        .map(([_, file]) => (file as OutputAsset).source)
        .join('')

      if (cssFiles) {
        this.emitFile({
          type: 'asset',
          fileName: 'index.css',
          source: cssFiles,
        })

        Object.entries(bundle).forEach(([name, file]) => {
          if (name.endsWith('.js') && (file as OutputChunk).isEntry) {
            const jsFile = file as OutputChunk
            const hasDirective =
              jsFile.code.match(/^['"]use client['"];\n?/) ||
              this.getModuleInfo(name)?.meta?.directives?.client

            jsFile.code = `${
              hasDirective ? "'use client';\n" : ''
            }import './index.css';\n${jsFile.code}`
          }
        })
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
