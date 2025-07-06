import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import type { OutputAsset, OutputChunk } from 'rollup'

function preserveDirectivesPlugin() {
  const CLIENT_DIRECTIVE_REGEX = /^['"]use client['"];\n?/

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
            code: `'use client';\n${code.replace(CLIENT_DIRECTIVE_REGEX, '')}`,
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
          fileName: 'lsd-react.css',
          source: cssFiles,
        })

        const lsdReactFile = bundle['lsd-react.js'] as OutputChunk | undefined
        if (lsdReactFile?.isEntry) {
          lsdReactFile.code = `import './lsd-react.css';\n${lsdReactFile.code}`
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
