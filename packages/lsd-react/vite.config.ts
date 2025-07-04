import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import type { OutputAsset, OutputChunk, OutputBundle } from 'rollup'

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
            jsFile.code = `import './index.css';\n${jsFile.code}`
          }
        }
      }
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src'],
    }),
  ],

  build: {
    minify: true,
    outDir: 'dist',
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'),
      name: 'lsd-react',
      fileName: 'lsd-react',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: { globals: { react: 'React', 'react-dom': 'ReactDOM' } },
      plugins: [injectCssPlugin()],
    },
  },
})
