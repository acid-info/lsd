import { Global, css } from '@emotion/react'
import {
  Canvas,
  Controls,
  Description,
  Subtitle,
  Title,
  useOf,
} from '@storybook/blocks'
import type { Preview } from '@storybook/react'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { Dropdown, ThemeProvider, defaultThemes } from '../src'
import { THEME_TYPOGRAPHY_FONT_CATEGORIES } from '../src/components/Theme/constants'
import { docTheme, storybookThemes } from './themes'
import { withTheme } from './withTheme.decorator'

const useGlobals = () => {
  const GLOBAL_PROPS = {
    themeColor: {
      defaultValue: 'Dark',
      description: 'Theme color',
      name: 'Theme color',
      toolbar: {
        icon: '',
        items: [
          {
            title: 'Dark',
            value: 'Dark',
          },
          {
            title: 'Light',
            value: 'Light',
          },
        ],
      },
    },
    themeFont: {
      defaultValue: 'sans-serif',
      description: 'Theme font',
      name: 'Theme Font',
      toolbar: {
        icon: '',
        items: [
          {
            title: 'monospace',
            value: 'monospace',
          },
          {
            title: 'sans-serif',
            value: 'sans-serif',
          },
          {
            title: 'serif',
            value: 'serif',
          },
        ],
      },
    },
  }

  const [updated, setUpdated] = useState(0)
  const [state, setState] = useState(
    Object.fromEntries(
      Object.entries(GLOBAL_PROPS).map(([name, prop]) => [
        name,
        (window as any).__STORYBOOK_STORY_STORE__?.globals?.globals?.[name] ??
          prop.defaultValue,
      ]),
    ),
  )

  const updateGlobals = async (func: (globals: any) => void) => {
    const { __STORYBOOK_ADDONS_PREVIEW } = window as any
    const { channel } = __STORYBOOK_ADDONS_PREVIEW

    const allGlobals = channel.data.updateGlobals

    allGlobals.map((g) => func(g.globals))
    await Promise.all(
      allGlobals.map((globals, index) =>
        channel.events.updateGlobals[index](globals),
      ),
    )
  }

  useEffect(() => {
    updated > 0 &&
      updateGlobals((globals) => {
        Object.entries(state).forEach(([name, value]) => {
          globals[name] = value
        })
      })
  }, [updated, state])

  return {
    props: Object.entries(GLOBAL_PROPS).map(([name, prop]) => ({
      key: name,
      name: prop.name,
      value: state[name],
      values: prop.toolbar?.items ?? [],
      set: (value: string) => {
        setState((s) => ({ ...s, [name]: value }))
        setUpdated((v) => v + 1)
      },
    })),
  }
}

const preview: Preview = {
  parameters: {
    ...storybookThemes.parameters,
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: {
        ...Object.fromEntries(
          Object.entries(storybookThemes.defaultTheme.breakpoints).map(
            ([key, { width }]) => [
              key,
              {
                name: key,
                styles: {
                  width: (width > 0 ? width : 360) + 'px',
                  height: 'auto',
                  minHeight: 400,
                },
              },
            ],
          ),
        ),
      },
    },
    docs: {
      theme: docTheme,
      page: () => {
        const globals = useGlobals()

        const resolvedOf = useOf('meta', ['meta'])
        const { stories, meta, moduleExports } = resolvedOf.csfFile

        const controls =
          typeof meta?.parameters?.docs?.controls === 'undefined' ||
          meta?.parameters?.docs?.controls === true

        const embedded =
          new URLSearchParams(window.location.search).get('embedded') === 'true'
        const globalControls =
          new URLSearchParams(window.location.search).get('globalControls') ===
          'true'
        const hideElements = (
          new URLSearchParams(window.location.search).get('hide') || ''
        ).split(',')

        const hideTitle = hideElements.includes('title')
        const hideSubtitle = hideElements.includes('subtitle')
        const hideDescription = hideElements.includes('description')
        const hideToolbar = hideElements.includes('toolbar')
        const hideControls = hideElements.includes('controls')

        return (
          <ThemeProvider theme={defaultThemes.dark}>
            <div
              className={clsx(
                'docs-wrapper',
                embedded && 'docs-wrapper--embedded',
                hideElements.map((element) => `docs-wrapper--hide-${element}`),
              )}
            >
              {!hideTitle && <Title />}
              {!hideSubtitle && <Subtitle />}
              {!hideDescription && <Description />}
              {globalControls && (
                <div className="docs-global-controls">
                  {globals.props.map((prop, index) => (
                    <Dropdown
                      key={index}
                      menuProps={{ className: 'docs-dropdown-menu' }}
                      value={prop.value}
                      onChange={(value) => prop.set(value as string)}
                      options={prop.values.map((i) => ({
                        name: i.title,
                        value: i.value,
                      }))}
                      triggerLabel={prop.name}
                      label={prop.name}
                    />
                  ))}
                </div>
              )}
              <Canvas className="canvas" withToolbar={!hideToolbar} />
              {controls && !hideControls && <Controls />}
            </div>
            <Global
              styles={css`
                .docs-story,
                #lsd-presentation .docs-dropdown-menu {
                  ${defaultThemes.dark.cssVars}

                  background: rgb(var(--lsd-surface-primary));
                }

                .docs-global-controls {
                  display: flex;
                  flex-direction: row;
                  gap: 16px;
                  margin-top: 32px;
                }

                .sbdocs-wrapper {
                  .sbdocs-preview {
                    // source code
                    .docs-story + div {
                      border-top: 1px solid;
                    }

                    // toolbar
                    > div:nth-child(1) {
                      button:hover svg {
                        color: #fff !important;
                      }
                    }
                  }

                  .docblock-argstable-body {
                    .rejt-tree {
                      .rejt-name {
                        color: #fff !important;
                      }

                      .rejt-value-node:hover > .rejt-value {
                        color: #000 !important;
                        background: #fff !important;
                      }
                    }

                    input[type='checkbox'] {
                      box-shadow: none !important;
                    }

                    input[type='radio'] + span {
                      color: #fff !important;
                    }
                  }

                  .docs-wrapper--embedded {
                  }

                  .docs-wrapper {
                    &--hide-code {
                      .docblock-code-toggle {
                        display: none !important;
                      }
                    }

                    &--hide-canvas-border {
                      .sbdocs-preview {
                        border: none;
                        .docs-story > div:nth-child(1) {
                          padding: 0 !important;
                        }
                      }
                    }
                  }
                }
              `}
            />

            {embedded && (
              <Global
                styles={css`
                  .sbdocs-wrapper {
                    padding: 1px;
                  }
                `}
              />
            )}
          </ThemeProvider>
        )
      },
    },
  },
  decorators: [withTheme],
  argTypes: {
    genericFontFamily: {
      type: {
        name: 'enum',
        value: THEME_TYPOGRAPHY_FONT_CATEGORIES,
      },
      defaultValue: 'inherit',
    },
  },
  globalTypes: {
    ...storybookThemes.globalTypes,
  },
}

export default preview
