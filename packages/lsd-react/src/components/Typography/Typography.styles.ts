import { css } from '@emotion/react'
import { THEME_TYPOGRAPHY_VARIANTS, TypographyVariants } from '../Theme'
import { THEME_TYPOGRAPHY_ELEMENTS } from '../Theme/constants'
import { typographyClasses } from './Typography.classes'

const selectors = (variant: TypographyVariants) =>
  [
    ...(THEME_TYPOGRAPHY_ELEMENTS[variant] ?? []),
    `.${typographyClasses[variant]}`,
  ].join(', ')

export const TypographyStyles = css`
  body * {
    font-family: var(--lsd-typography-generic-font-family);
  }

  .${typographyClasses.root} {
    color: rgb(var(--lsd-text-primary));
  }

  .${typographyClasses.sansSerif} {
    &,
    * {
      font-family: sans-serif;
    }
  }

  .${typographyClasses.serif} {
    &,
    * {
      font-family: serif;
    }
  }

  .${typographyClasses.monospace} {
    &,
    * {
      font-family: monospace;
    }
  }

  ${THEME_TYPOGRAPHY_VARIANTS.map(
    (variant) => css`
      ${selectors(variant)} {
        color: rgb(var(--lsd-text-primary));
        font-weight: var(--lsd-${variant}-fontWeight);
        font-size: var(--lsd-${variant}-fontSize);
        line-height: var(--lsd-${variant}-lineHeight);
      }
    `,
  )}

  .${typographyClasses.primary} {
    color: rgb(var(--lsd-text-primary));
  }

  .${typographyClasses.secondary} {
    color: rgb(var(--lsd-text-secondary));
  }

  input {
    color: rgb(var(--lsd-text-primary));
    font-size: var(--lsd-body1-fontSize);
    font-weight: var(--lsd-body1-fontWeight);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span {
    margin: 0;
  }
`
