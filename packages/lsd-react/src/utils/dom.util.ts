import { LsdStyleTag } from '../theme/LsdThemeStyles'

export const wasElementClicked = (
  event: Event,
  element: HTMLElement | null,
): boolean => {
  if (!element) {
    return false
  }

  return event?.composedPath().includes(element) || false
}

export const extractLsdVars = (themeName: string) => {
  const cssVars: Record<string, string> = {}
  ;[...document.querySelectorAll('style')]
    .filter((styleTag) => styleTag.id === LsdStyleTag)
    .forEach((styleTag) => {
      const cssText =
        styleTag.textContent
          ?.split('[data-theme="')
          .find((content) => content.startsWith(`${themeName}"]`)) || ''
      const regex = /(--[^:;]+):\s*([^;]+);/g
      let match
      while ((match = regex.exec(cssText)) !== null) {
        cssVars[match[1]] = match[2].trim()
      }
    })
  return cssVars
}
