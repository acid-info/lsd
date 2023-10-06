import type { ArgTypes } from '@storybook/react'
import * as fs from 'fs'
import * as fsp from 'fs/promises'
import { glob } from 'glob'
import path from 'path'
import { fileURLToPath } from 'url'

const DIRNAME = fileURLToPath(import.meta.url)
const ROOT_DIR = path.resolve(DIRNAME, '../../../')
const BUILD_DIR = path.resolve(ROOT_DIR, 'storybook-static')
const STORIES_JSON = path.resolve(BUILD_DIR, 'stories.json')

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

export const fromStories = async (storiesJson: StoriesJson) => {
  const { stories: storiesMap } = storiesJson
  const stories = Object.values(storiesMap).filter(
    (story) => !story.parameters.docsOnly,
  )

  const components: Record<
    string,
    {
      stories: StoryInfo[]
      argTypes: ArgTypes
      __docgenInfo: any
    }
  > = {}

  const storyFiles = await glob(
    path.join(BUILD_DIR, 'assets') + `/*.stories-*.js`,
  )

  for (const file of storyFiles) {
    const mod = await import(file)
    const { title, component, argTypes } = mod.default

    components[component.displayName] = {
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

export const run = async () => {
  if (!fs.existsSync(BUILD_DIR)) {
    console.error('The storybook-static dir not found!')
    process.exit(1)
  }
  if (!fs.existsSync(STORIES_JSON)) {
    console.error('The stories.json file not found!')
    process.exit(1)
  }

  const stories = await import(STORIES_JSON, { assert: { type: 'json' } })

  await fsp.writeFile(
    path.join(BUILD_DIR, 'package.json'),
    Buffer.from(
      JSON.stringify({
        type: 'module',
      }),
    ),
  )

  const result = await fromStories(stories.default)

  await fsp.writeFile(
    path.join(BUILD_DIR, 'components.json'),
    Buffer.from(JSON.stringify(result)),
  )

  fs.unlinkSync(path.join(BUILD_DIR, 'package.json'))
}

run()
