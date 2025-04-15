import clsx from 'clsx'
import React from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import { tooltipBaseClasses } from './TooltipBase.classes'

export type TooltipBaseProps = CommonProps &
  React.HTMLAttributes<HTMLDivElement> & {
    arrowOffset?: number
    arrowPosition?: 'top' | 'bottom' | 'left' | 'right'
    arrowSize?: number
    rootRef?: React.Ref<HTMLDivElement>
  }

const classes = tooltipBaseClasses

function TooltipBase({
  children,
  arrowOffset,
  arrowPosition = 'top',
  arrowSize = 10,
  rootRef,
  ...props
}: TooltipBaseProps) {
  const commonProps = useCommonProps(props)

  // Calculate arrow tip style based on position and offset.
  const arrowTipStyle: React.CSSProperties = {
    width: `${arrowSize}px`,
    height: `${arrowSize}px`,
    transform: 'rotate(45deg)',
  }

  // Adjust the arrow tip's position along the tooltip border based on the arrowPosition and arrowOffset.
  if (['top', 'bottom'].includes(arrowPosition)) {
    arrowTipStyle.left = `${arrowOffset}px`
    arrowTipStyle[arrowPosition] = `-${arrowSize / 2}px` // Halfway above the root box's border
  } else {
    arrowTipStyle.top = `${arrowOffset}px`
    arrowTipStyle[arrowPosition] = `-${arrowSize / 2}px` // Halfway outside the root box's border
  }

  return (
    <div
      ref={rootRef}
      {...omitCommonProps(props)}
      className={clsx(
        commonProps.className,
        props.className,
        tooltipBaseClasses.root,
      )}
    >
      {!arrowOffset ? (
        children
      ) : (
        <>
          <div className={tooltipBaseClasses.arrowTip} style={arrowTipStyle} />
          <div className={tooltipBaseClasses.content}>{children}</div>
        </>
      )}
    </div>
  )
}

TooltipBase.classes = classes

export { TooltipBase }
