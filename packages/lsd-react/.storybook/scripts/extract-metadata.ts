import type { ArgTypes } from '@storybook/react'
import * as fs from 'fs'
import * as fsp from 'fs/promises'
import { glob } from 'glob'
import path from 'path'
import { fileURLToPath } from 'url'
import * as _ from 'lodash'

const DIRNAME = fileURLToPath(import.meta.url)
const ROOT_DIR = path.resolve(DIRNAME, '../../../')

let BUILD_DIR = path.resolve(ROOT_DIR, 'storybook-static')

// Parse command line arguments for output directory override
const outputDirArg = process.argv.find((arg) => arg.startsWith('--output-dir='))
if (outputDirArg) {
  const outputDir = outputDirArg.split('=')[1]

  if (outputDir && fs.existsSync(outputDir)) {
    BUILD_DIR = outputDir
    console.log(`Using custom output directory: ${BUILD_DIR}`)
  }
}

;(global as any).__STORYBOOK_MODULE_ADDONS__ = {}
;(global as any).__STORYBOOK_MODULE_PREVIEW_API__ = {}

type StoryInfo = {
  id: string
  name: string
  title: string
  kind: string
  importPath: string
  tags: string[]
  story: string
  parameters: {
    __id: string
    docsOnly: boolean
    fileName: string
  }
}

type StoriesJson = {
  v: number
  stories: StoryInfo[]
}

// Find the index JSON file that contains story data
async function findIndexJsonFile() {
  const indexJsonPath = path.join(BUILD_DIR, 'index.json')
  if (fs.existsSync(indexJsonPath)) {
    return indexJsonPath
  }

  // Fallback to looking for older index-*.json pattern if index.json doesn't exist
  const files = await glob(path.join(BUILD_DIR, 'index-*.json'))
  if (files.length === 0) {
    return null
  }
  return files[0]
}

// Convert new index-*.json format to the old stories.json format
async function convertIndexJsonToStoriesJson(
  indexJsonPath: string,
): Promise<StoriesJson> {
  const content = await fsp.readFile(indexJsonPath, 'utf8')
  const data = JSON.parse(content)

  // Transform the new format to match the old expected format
  const stories = Object.entries(data.stories || {}).map(
    ([id, story]: [string, any]) => ({
      id,
      name: story.name || '',
      title: story.title || '',
      kind: story.title || '', // In new format, kind == title
      importPath: story.importPath || '',
      tags: story.tags || [],
      story: story.name || '',
      parameters: {
        __id: id,
        docsOnly: story.parameters?.docsOnly || false,
        fileName: story.parameters?.fileName || '',
      },
    }),
  )

  return {
    v: data.v || 4,
    stories,
  }
}

export const fromStories = async (
  storiesJson: StoriesJson,
  assetsDir: string,
) => {
  const { stories: storiesMap } = storiesJson
  const stories = Object.values(storiesMap).filter(
    (story) => !story.parameters.docsOnly,
  )

  const components: Record<
    string,
    {
      component: {
        title: string
        subtitle: string
        description: string
      }
      stories: StoryInfo[]
      argTypes: ArgTypes
      __docgenInfo: any
    }
  > = {}

  const storyFiles = await glob(assetsDir + `/*.stories-*.js`)

  for (const file of storyFiles) {
    try {
      const mod = await import(file)
      const { title, component, argTypes } = mod.default || {}

      if (!component || !component.displayName) continue

      const componentTitle = mod.default?.title || title || ''
      const componentSubtitle = mod.default?.parameters?.componentSubtitle || ''
      const componentDescription =
        mod.default?.parameters?.docs?.description?.component || ''

      components[component.displayName] = {
        component: {
          title: componentTitle,
          subtitle: componentSubtitle,
          description: componentDescription,
        },
        argTypes: argTypes || {},
        stories: stories.filter((story) => story.kind === componentTitle),
        __docgenInfo: component.__docgenInfo,
      }
    } catch (error) {
      console.warn(`Error processing file ${file}:`, error)
    }
  }

  return Object.entries(components)
    .map(([name, details]) => ({
      name,
      ...details,
    }))
    .sort((a, b) => a.name.localeCompare(b.name))
}

export const extractGlobalTypes = async (assetsDir: string) => {
  const filenames = await glob(assetsDir + `/preview-*.js.map`)

  let previewFilename: string | null = null

  for (const filename of filenames) {
    const file = await fsp.readFile(filename, 'utf8')
    const json = JSON.parse(file)

    if (
      json.sources &&
      json.sources.some((source: string) =>
        source.endsWith('.storybook/preview.tsx'),
      )
    ) {
      previewFilename = filename.slice(0, -4)
      break
    }
  }

  if (!previewFilename) {
    console.error('The preview.js file not found!')
    return
  }

  const mod = await import(previewFilename)
  return mod.default.globalTypes || []
}

export const extractMetadata = async (dir: string) => {
  const assetsDir = path.join(dir, 'assets')

  await fsp.writeFile(
    path.join(assetsDir, 'package.json'),
    Buffer.from(
      JSON.stringify({
        type: 'module',
      }),
    ),
  )

  const indexJsonPath = await findIndexJsonFile()
  if (!indexJsonPath) {
    throw new Error('Could not find index.json file')
  }

  const storiesJson = await convertIndexJsonToStoriesJson(indexJsonPath)
  const components = await fromStories(storiesJson, assetsDir)
  // const globalTypes = await extractGlobalTypes(assetsDir)

  fs.unlinkSync(path.join(assetsDir, 'package.json'))

  return {
    components,
    // globalTypes,
  }
}

export const run = async () => {
  if (!fs.existsSync(BUILD_DIR)) {
    console.error(`The build directory not found: ${BUILD_DIR}`)
    process.exit(1)
  }

  try {
    const metadata = await extractMetadata(BUILD_DIR)

    await fsp.writeFile(
      path.join(BUILD_DIR, '_metadata.json'),
      Buffer.from(JSON.stringify(metadata)),
    )

    console.log(`Metadata extraction complete for: ${BUILD_DIR}`)
  } catch (error) {
    console.error('Error extracting metadata:', error)
    process.exit(1)
  }
}

run()
