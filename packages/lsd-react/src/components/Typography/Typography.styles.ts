import { css } from '@emotion/react'
import {
  THEME_TYPOGRAPHY_VARIANTS,
  TypographyVariants,
  withTheme,
} from '../Theme'
import { THEME_TYPOGRAPHY_ELEMENTS } from '../Theme/constants'
import { typographyClasses } from './Typography.classes'

const selectors = (variant: TypographyVariants) =>
  [
    ...(THEME_TYPOGRAPHY_ELEMENTS[variant] ?? []),
    `.${typographyClasses[variant]}`,
  ].join(', ')

export const TypographyStyles = withTheme(
  (theme) => css`
    .${typographyClasses.root} {
    }

    .${typographyClasses.primary} {
      color: rgb(var(--lsd-text-primary));
    }

    .${typographyClasses.secondary} {
      color: rgb(var(--lsd-text-secondary));
    }

    ${THEME_TYPOGRAPHY_VARIANTS.map(
      (variant) => css`
        ${selectors(variant)} {
          color: rgb(var(--lsd-text-primary));
          font-weight: normal;
          font-size: var(--lsd-${variant}-fontSize);
          font-family: var(--lsd-${variant}-fontFamily);
          line-height: var(--lsd-${variant}-lineHeight);
        }
      `,
    )}

    input {
      color: rgb(var(--lsd-text-primary));
      font-weight: normal;
      font-size: var(--lsd-body1-fontSize);
      font-family: var(--lsd-body1-fontFamily);
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
  `,
)
