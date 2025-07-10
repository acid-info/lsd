import fs from 'fs'
import path from 'path'
import type { Plugin } from 'vite'

interface ComponentExportsOptions {
  componentsDir?: string
  componentIndexFile?: string
}

export function componentExportsPlugin(
  options: ComponentExportsOptions = {},
): Plugin {
  const {
    componentsDir = './src/components/client',
    componentIndexFile = './src/components/client/index.ts',
  } = options

  function getComponentsFromIndex(): string[] {
    const indexContent = fs.readFileSync(componentIndexFile, 'utf-8')
    const exportRegex = /export \* from '\.\/([^']+)'/g
    const components: string[] = []

    let match
    while ((match = exportRegex.exec(indexContent)) !== null) {
      components.push(match[1])
    }

    return components
  }

  return {
    name: 'component-exports',

    config(config) {
      // Get components from index.ts exports
      const components = getComponentsFromIndex()

      // Generate build entries for each component
      const componentEntries = components.reduce((acc, component) => {
        const componentPath = path.join(componentsDir, component, 'index.ts')
        if (fs.existsSync(componentPath)) {
          acc[`components/client/${component}/index`] = componentPath
        }
        return acc
      }, {} as Record<string, string>)

      // Merge with existing lib config
      if (config.build?.lib) {
        const existingEntry =
          typeof config.build.lib.entry === 'object'
            ? config.build.lib.entry
            : {}
        config.build.lib.entry = {
          ...existingEntry,
          ...componentEntries,
        }
      }
    },
  }
}
