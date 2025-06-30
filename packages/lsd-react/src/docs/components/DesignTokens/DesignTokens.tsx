import { get } from 'lodash'
import { Typography } from '../../../components/Typography'
import styles from './DesignTokens.module.css'
import { useEffect, useState } from 'react'
import { useTheme } from '../../../components/Theme/useTheme'
import {
  THEME_TYPOGRAPHY_VARIANTS,
  TypographyVariants,
} from '../../../components/Theme'

type Token = (
  | {
      type: 'color'
      rgb: string
      hex: string
    }
  | {
      type: 'spacing'
      value: string
    }
  | {
      type: 'typography'
      value: string
    }
) & {
  name: string
  varName: string
}

type TokenGroup<T = Token> = {
  name: string
  tokens: T[]
}

type Colors = TokenGroup<Extract<Token, { type: 'color' }>>[]
type Spacing = TokenGroup<Extract<Token, { type: 'spacing' }>>[]
type TypographyTokens = TokenGroup<Extract<Token, { type: 'typography' }>>[]

const getDesignTokens = (
  cssVars: Record<string, string>,
): {
  colors: Colors
  spacing: Spacing
  typography: TypographyTokens
} => {
  const rgbToHex = (r: number, g: number, b: number) =>
    '#' +
    [r, g, b]
      .map((val) => (val || 0).toString(16))
      .map((hex) => (hex.length === 1 ? `0${hex}` : hex))
      .join('')

  const remToPx = (rem: string) => parseFloat(rem.replace('rem', '')) * 16

  const keys = ['surface', 'border', 'text', 'icon']

  const colors: Colors = [
    {
      name: 'primitives',
      tokens: [
        {
          type: 'color',
          name: 'primary',
          varName: `--lsd-theme-primary`,
          rgb: cssVars['--lsd-theme-primary'],
          hex: rgbToHex(
            ...((cssVars['--lsd-theme-primary'] ?? '')
              .split(',')
              .map((x) => parseInt(x, 10)) as [number, number, number]),
          ),
        },
        {
          type: 'color',
          name: 'secondary',
          varName: '--lsd-theme-secondary',
          rgb: cssVars['--lsd-theme-secondary'],
          hex: rgbToHex(
            ...((cssVars['--lsd-theme-secondary'] ?? '')
              .split(',')
              .map((x) => parseInt(x, 10)) as [number, number, number]),
          ),
        },
      ],
    },
    ...keys.map((key) => {
      const rgbVal = (ck: string) => get(cssVars, `--lsd-${key}-${ck}`) ?? ''
      return {
        name: key,
        tokens: ['primary', 'secondary'].map((ck) => ({
          name: ck,
          type: 'color',
          varName: `--lsd-${key}-${ck}`,
          rgb: rgbVal(ck),
          hex: rgbToHex(
            ...(rgbVal(ck)
              .split(',')
              .map((x: string) => parseInt(x, 10)) as [number, number, number]),
          ),
        })),
      } as Colors[number]
    }),
  ]

  const spacing: Spacing = Object.entries(cssVars)
    .filter(([key]) => key.startsWith('--lsd-spacing-'))
    .map(([key, val]) => ({
      name: key,
      tokens: [
        {
          name: val.toString(),
          type: 'spacing',
          varName: key,
          value: `${val}`,
        },
      ],
    }))

  const getVariantVarKeys = (variant: TypographyVariants) => {
    const keys = Object.keys(cssVars).filter((key) =>
      key.includes(`-${variant}-`),
    )
    const fontSizeKey = keys.find((key) => key.endsWith(`-fontSize`))
    const lineHeightKey = keys.find((key) => key.endsWith(`-lineHeight`))
    return { fontSizeKey, lineHeightKey }
  }

  const typography: TypographyTokens = THEME_TYPOGRAPHY_VARIANTS.map(
    (variant) => {
      const { fontSizeKey, lineHeightKey } = getVariantVarKeys(variant)
      if (!fontSizeKey || !lineHeightKey) return undefined
      const fontSizeVal = cssVars[fontSizeKey]
      const lineHeightVal = cssVars[lineHeightKey]

      return {
        name: variant,
        tokens: [
          {
            name: 'fontSize',
            type: 'typography',
            value: `${fontSizeVal} (${remToPx(fontSizeVal || '')}px)`,
            varName: fontSizeKey,
          },
          {
            name: 'lineHeight',
            type: 'typography',
            value: `${lineHeightVal} (${remToPx(lineHeightVal || '')}px)`,
            varName: lineHeightKey,
          },
        ],
      }
    },
  ).filter(Boolean) as TypographyTokens

  return {
    colors,
    spacing,
    typography,
  }
}

export const SpacingDesignTokens = () => {
  const { cssVars } = useTheme()
  const [spacing, setSpacing] = useState<Spacing | null>(null)

  useEffect(() => {
    setSpacing(getDesignTokens(cssVars).spacing)
  }, [cssVars])

  if (!spacing) return <div></div>

  return <Spacing spacing={spacing}></Spacing>
}

export const TypographyDesignTokens = () => {
  const { cssVars } = useTheme()
  const [typography, setTypography] = useState<TypographyTokens | null>(null)

  useEffect(() => {
    setTypography(getDesignTokens(cssVars).typography)
  }, [cssVars])

  if (!typography) return <div></div>

  return <TypographyTable typography={typography}></TypographyTable>
}

export const ColorDesignTokens = () => {
  const { cssVars } = useTheme()
  const [colors, setColors] = useState<Colors | null>(null)

  useEffect(() => {
    setColors(getDesignTokens(cssVars).colors)
  }, [cssVars])

  if (!colors) return <div></div>

  return (
    <>
      {colors.map((group) => (
        <ColorGroup key={group.name} name={group.name} tokens={group.tokens} />
      ))}
    </>
  )
}

const ColorGroup: React.FC<Colors[number]> = ({ name, tokens }) => {
  return (
    <div className={styles.colorGroupRoot}>
      <Typography
        className={styles.colorGroupName}
        component="div"
        variant="body1"
      >
        {name}
      </Typography>
      <div className={styles.colorGroupTokens}>
        {tokens.map((token) => (
          <ColorCard key={token.name} groupName={name} {...token} />
        ))}
      </div>
    </div>
  )
}

const ColorCard: React.FC<
  Colors[number]['tokens'][number] & { groupName: string }
> = ({ groupName, name, varName, rgb, hex }) => {
  return (
    <div className={styles.colorCardRoot}>
      <div
        className={styles.colorCardColor}
        style={{
          background: `rgb(var(${varName}))`,
        }}
      ></div>
      <div className={styles.colorCardDetails}>
        <Typography
          genericFontFamily="monospace"
          variant="label2"
          className="color-card__var"
          component="div"
        >
          <p>
            {varName}: {rgb}
          </p>
          <p style={{ marginTop: 4 }}>
            theme.palette
            {groupName === 'primitives' ? `.${name}` : `.${groupName}.${name}`}
          </p>
        </Typography>
        <div className={styles.colorCardValue}>
          <Typography variant="label2" className="color-card__rgb">
            {name}
          </Typography>
          <Typography variant="label2" className="color-card__hex">
            {hex}
          </Typography>
        </div>
      </div>
    </div>
  )
}

export const Spacing: React.FC<{ spacing: Spacing }> = ({ spacing }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Example</th>
          <th>CSS variable</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {spacing
          .flatMap((s) => s.tokens)
          .map((s) => (
            <tr key={s.name}>
              <td>
                <div
                  style={{
                    width: s.value,
                    height: s.value,
                    boxSizing: 'border-box',
                    border: '1px solid rgb(var(--lsd-border-primary))',
                  }}
                ></div>
              </td>
              <td>
                <Typography variant="label1" genericFontFamily="monospace">
                  {s.varName}
                </Typography>
              </td>
              <td>
                <Typography variant="label1" genericFontFamily="monospace">
                  {s.value}
                </Typography>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}

export const TypographyTable: React.FC<{ typography: TypographyTokens }> = ({
  typography,
}) => {
  return (
    <table className={styles.table}>
      <thead>
        <th>variant</th>
        <th>tokens</th>
        <th>Value</th>
      </thead>
      <tbody>
        {typography.map((t) => (
          <>
            <tr>
              <td rowSpan={t.tokens.length}>
                <Typography variant={t.name as TypographyVariants}>
                  {t.name}
                </Typography>
              </td>
              {t.tokens.slice(0, 1).map((token) => (
                <>
                  <td>
                    <Typography variant="body2" genericFontFamily="monospace">
                      {token.varName}
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="body2" genericFontFamily="monospace">
                      {token.value}
                    </Typography>
                  </td>
                </>
              ))}
            </tr>
            {t.tokens.slice(1).map((token) => (
              <tr>
                <td>
                  <Typography variant="body2" genericFontFamily="monospace">
                    {token.varName}
                  </Typography>
                </td>
                <td>
                  <Typography variant="body2" genericFontFamily="monospace">
                    {token.value}
                  </Typography>
                </td>
              </tr>
            ))}
          </>
        ))}
      </tbody>
    </table>
  )
}
