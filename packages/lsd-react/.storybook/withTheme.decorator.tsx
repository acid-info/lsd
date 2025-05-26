import { useGlobals } from '@storybook/preview-api'
import { Decorator } from '@storybook/react'
import React, { useEffect } from 'react'
import { ThemeProvider } from '../src'
import { storybookThemes } from './themes'

export const withTheme: Decorator = (Story, context) => {
  const StoryComponent = Story as unknown as React.ComponentType
  const isDoc = context.viewMode === 'docs'

  const theme = storybookThemes.getTheme(context)
  const [globals, setGlobals] = useGlobals()

  useEffect(() => {
    const background = (context.parameters.backgrounds?.values ?? []).find(
      (value) => theme.name.startsWith(value.name),
    )?.value

    if (globals.backgrounds?.value !== background) {
      setGlobals({
        ...globals,
        backgrounds: {
          ...(globals.background ?? {}),
          value: background,
        },
      })
    }
  }, [theme])

  return (
    <div>
      <ThemeProvider theme={theme} injectCssVars={false}>
        <div className="story-wrapper">
          <StoryComponent />
        </div>
        <style>
          {`
            .story-wrapper,
            #lsd-presentation {
              ${theme.cssVars}
            }
            .docs-story {
              background: rgb(${theme.palette.surface.primary});
            }
          `}
        </style>
      </ThemeProvider>
    </div>
  )
}
