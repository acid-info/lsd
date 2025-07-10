import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { componentExportsPlugin } from './plugins/component-exports'
import { preserveDirectivesPlugin } from './plugins/preserve-directives'
import { injectCssPlugin } from './plugins/inject-css'

export default defineConfig({
  plugins: [
    react(),
    componentExportsPlugin(),
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
        chunkFileNames: (chunkInfo) => {
          // Keep component chunks in their directories
          if (chunkInfo.name?.startsWith('components/')) {
            return '[name].js'
          }
          // Put shared chunks in a chunks directory
          return 'chunks/[name]-[hash].js'
        },
      },
      plugins: [injectCssPlugin()],
    },
  },
})
