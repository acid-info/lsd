export const wasElementClicked = (
  event: Event,
  element: HTMLElement | null,
): boolean => {
  if (!element) {
    return false
  }

  return event?.composedPath().includes(element) || false
}
