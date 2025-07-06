import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import type { OutputAsset, OutputChunk } from 'rollup'

const CLIENT_DIRECTIVE_REGEX = /^['"]use client['"];\n?/

function handleClientDirective(code: string, hasDirective: boolean) {
  if (!hasDirective) return code
  return `'use client';\n${code.replace(CLIENT_DIRECTIVE_REGEX, '')}`
}

function preserveDirectivesPlugin() {
  return {
    name: 'preserve-directives',
    transform(code: string, id: string) {
      const isSourceFile =
        !id.includes('node_modules') &&
        (id.endsWith('.ts') || id.endsWith('.tsx'))

      if (!isSourceFile) return null

      const hasDirective = CLIENT_DIRECTIVE_REGEX.test(code)
      if (!hasDirective) return null

      return {
        code: code.replace(CLIENT_DIRECTIVE_REGEX, ''),
        map: null,
        meta: { hasClientDirective: true },
      }
    },
    renderChunk(code: string, chunk: { moduleIds: string[] }) {
      const needsDirective = chunk.moduleIds.some(
        (id) => this.getModuleInfo(id)?.meta?.hasClientDirective,
      )

      return needsDirective
        ? {
            code: handleClientDirective(code, true),
            map: null,
          }
        : null
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
              jsFile.code.match(CLIENT_DIRECTIVE_REGEX) ||
              this.getModuleInfo(name)?.meta?.directives?.client

            jsFile.code = handleClientDirective(
              `import './index.css';\n${jsFile.code.replace(
                CLIENT_DIRECTIVE_REGEX,
                '',
              )}`,
              hasDirective,
            )
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
