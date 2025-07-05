import { JSX } from 'react'
import { generateLsdVars, PrepareLsdThemeProps } from './pureProvider'

export const LsdStyleTag = 'lsd-theme-styles'

export function LsdThemeStyles(props: PrepareLsdThemeProps): JSX.Element {
  const lsdVars = generateLsdVars(props)

  return (
    <style
      id="lsd-theme-styles"
      dangerouslySetInnerHTML={{ __html: lsdVars }}
    />
  )
}
