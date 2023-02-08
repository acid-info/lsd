import { DecoratorFunction, useGlobals } from '@storybook/addons'
import React, { useEffect } from 'react'
import { defaultThemes, ThemeProvider } from '../src'

export const withTheme: DecoratorFunction = (Story, context) => {
  const StoryComponent = Story as any as React.ComponentType

  const themeName = context.globals?.theme ?? 'light'
  const theme = defaultThemes[themeName]

  const [globals, setGlobals] = useGlobals()

  useEffect(() => {
    setGlobals({
      ...globals,
      backgrounds: {
        ...(globals.background ?? {}),
        value: theme.palette.background.primary,
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
