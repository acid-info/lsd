import { tooltipBaseClasses } from './TooltipBase.classes'

export const TooltipBaseStyles = `
  .${tooltipBaseClasses.root} {
    border: 1px solid rgb(var(--lsd-border-primary));
    position: relative;
  }

  .${tooltipBaseClasses.arrowTip} {
    border: 1px solid rgb(var(--lsd-border-primary));
    position: absolute;
    background: rgb(var(--lsd-surface-primary));
  }

  .${tooltipBaseClasses.content} {
    background: rgb(var(--lsd-surface-primary));
    width: 100%;
    height: 100%;

    /* Position relative is only used so the z-index works. */
    position: relative;
    /* Make sure the arrow tip div is behind the tooltip's content. */
    z-index: 1;
  }
`
