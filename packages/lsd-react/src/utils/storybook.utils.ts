import React from 'react'
import * as Icons from '../components/Icons'
import { IconProps } from '../components/Icons/Icon/Icon'

export const useStorybookIconComponent = (name: string) => {
  const Component = (Icons as any)[name]

  if (!Component) return undefined
  return Component as React.ComponentType<IconProps>
}

useStorybookIconComponent.options = ['None', ...Object.keys(Icons)]
