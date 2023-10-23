import { Global, css } from '@emotion/react'
import { useGlobals } from '@storybook/preview-api'
import { Decorator } from '@storybook/react'
import React, { useEffect } from 'react'
import { ThemeProvider } from '../src'
import { storybookThemes } from './themes'

export const withTheme: Decorator = (Story, context) => {
  const StoryComponent = Story as any as React.ComponentType
  const isDoc = context.viewMode === 'docs'

  const theme = storybookThemes.getTheme(context)
  const [globals, setGlobals] = useGlobals()

  useEffect(() => {
    const background = (context.parameters.backgrounds?.values ?? []).find(
      (value) => theme.name.startsWith(value.name),
    )?.value

    globals.backgrounds?.value !== background &&
      setGlobals({
        ...globals,
        backgrounds: {
          ...(globals.background ?? {}),
          value: background,
        },
      })
  }, [theme])

  return (
    <div>
      <ThemeProvider theme={theme} injectCssVars={false}>
        <div className="story-wrapper">
          <StoryComponent />
        </div>
        {
          <Global
            styles={css`
              .story-wrapper,
              #lsd-presentation {
                ${theme.cssVars}
              }
              .docs-story {
                background: rgb(${theme.palette.surface.primary});
              }
            `}
          />
        }
      </ThemeProvider>
    </div>
  )
}
