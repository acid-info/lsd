import React from 'react'
import * as Icons from '../components/client/Icons'
import { LsdIconProps } from '../components/client/Icons'

export const useStorybookIconComponent = (name: string) => {
  const Component = (Icons as any)[name]

  if (!Component) return undefined
  return Component as React.ComponentType<LsdIconProps>
}

useStorybookIconComponent.options = ['None', ...Object.keys(Icons)]
