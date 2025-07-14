import { useGlobals } from '@storybook/preview-api'
import { Decorator } from '@storybook/react'
import React, { useEffect } from 'react'
import { PortalProvider } from '../src/components/client/PortalProvider'
import { storybookThemes } from './themes'
import { LsdThemeStyles } from '../src/theme'

export const withTheme: Decorator = (Story, context) => {
  const StoryComponent = Story as any as React.ComponentType

  const theme = storybookThemes.getTheme(context)
  const [globals, setGlobals] = useGlobals()

  useEffect(() => {
    const background = (context.parameters.backgrounds?.values ?? []).find(
      (value: Record<string, string>) => theme.name === value.name,
    )?.value

    document.documentElement.setAttribute('data-theme', theme.name)

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
      <LsdThemeStyles customThemes={{ [theme.name]: theme }} />
      <div className="story-wrapper">
        <PortalProvider>
          <StoryComponent />
        </PortalProvider>
      </div>
    </div>
  )
}
