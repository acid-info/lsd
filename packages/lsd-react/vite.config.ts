import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    dts({
      include: ['src'],
    }),
  ],

  build: {
    minify: false,
    outDir: 'dist',

    lib: {
      entry: path.resolve(__dirname, './src/index.ts'),
      name: 'lsd-react',
      fileName: 'lsd-react',
      formats: ['cjs', 'umd'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@emotion/styled', '@emotion/react'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})
