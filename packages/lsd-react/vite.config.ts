import { defineConfig } from 'vite'
import path from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    outDir: 'dist',
    minify: false,
    lib: {
      entry: {
        index: path.resolve(__dirname, 'src/index.ts'),
        client: path.resolve(__dirname, 'src/client.ts'),
      },
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
  plugins: [
    dts({
      include: ['src'],
      outputDir: 'dist/types',
    }),
  ],
})
