import { DecoratorFunction, useGlobals } from '@storybook/addons'
import React, { useEffect } from 'react'
import { Theme, ThemeProvider } from '../src'
import { storybookDefaultThemeKey, themes } from './themes'

export const withTheme: DecoratorFunction = (Story, context) => {
  const StoryComponent = Story as any as React.ComponentType

  const themeName = context.globals?.theme ?? storybookDefaultThemeKey
  const theme = themes[themeName] as Theme

  const [globals, setGlobals] = useGlobals()

  useEffect(() => {
    const background = (context.parameters.backgrounds?.values ?? []).find(
      (value) => value.name === themeName,
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
      <ThemeProvider theme={theme}>
        <StoryComponent />
      </ThemeProvider>
    </div>
  )
}
