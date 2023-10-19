import { useEffect, useState } from 'react'

export const useUpdatePositionStyle = (
  handleRef: React.RefObject<HTMLElement>,
  tiggerUpdate: boolean | undefined,
): React.CSSProperties => {
  const [style, setStyle] = useState<React.CSSProperties>({})

  useEffect(() => {
    const { width, height, top, left } =
      handleRef.current!.getBoundingClientRect()

    setStyle({
      left: left + window.scrollX,
      width,
      top: top + height + window.scrollY,
    })
  }, [tiggerUpdate])

  return style
}
