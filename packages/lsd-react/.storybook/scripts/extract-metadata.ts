import type { ArgTypes } from '@storybook/react'
import * as fs from 'fs'
import * as fsp from 'fs/promises'
import { glob } from 'glob'
import path from 'path'
import { fileURLToPath } from 'url'
import * as _ from 'lodash'

const DIRNAME = fileURLToPath(import.meta.url)
const ROOT_DIR = path.resolve(DIRNAME, '../../../')
const BUILD_DIR = path.resolve(ROOT_DIR, 'storybook-static')
const STORIES_JSON = path.resolve(BUILD_DIR, 'stories.json')

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
    const mod = await import(file)
    const { title, component, argTypes } = mod.default

    const componentTitle = mod.default.title || title
    const componentSubtitle = mod.default.parameters?.componentSubtitle || ''
    const componentDescription =
      mod.default.parameters?.docs?.description?.component || ''

    components[component.displayName] = {
      component: {
        title: componentTitle,
        subtitle: componentSubtitle,
        description: componentDescription,
      },
      argTypes,
      stories: stories.filter((story) => story.kind === title),
      __docgenInfo: component.__docgenInfo,
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

  const stories = await import(path.join(dir, 'stories.json'), {
    assert: { type: 'json' },
  })

  const components = await fromStories(stories.default, assetsDir)
  // const globalTypes = await extractGlobalTypes(assetsDir)

  fs.unlinkSync(path.join(assetsDir, 'package.json'))

  return {
    components,
    // globalTypes,
  }
}

export const run = async () => {
  if (!fs.existsSync(BUILD_DIR)) {
    console.error('The storybook-static dir not found!')
    process.exit(1)
  }
  if (!fs.existsSync(STORIES_JSON)) {
    console.error('The stories.json file not found!')
    process.exit(1)
  }

  const metadata = await extractMetadata(BUILD_DIR)

  await fsp.writeFile(
    path.join(BUILD_DIR, '_metadata.json'),
    Buffer.from(JSON.stringify(metadata)),
  )
}

run()
