'use client'

import React from 'react'
import { Theme } from './types'

export const ThemeContext = React.createContext<{
  theme: Theme
}>({ theme: null as any })
