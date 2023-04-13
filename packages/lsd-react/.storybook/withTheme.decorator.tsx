import { DecoratorFunction, useGlobals } from '@storybook/addons'
import React, { useEffect } from 'react'
import { ThemeProvider } from '../src'
import { storybookThemes } from './themes'

export const withTheme: DecoratorFunction = (Story, context) => {
  const StoryComponent = Story as any as React.ComponentType

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
      <ThemeProvider theme={theme}>
        <StoryComponent />
      </ThemeProvider>
    </div>
  )
}
