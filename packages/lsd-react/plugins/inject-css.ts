import type { OutputAsset, OutputChunk } from 'rollup'

export function injectCssPlugin() {
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
