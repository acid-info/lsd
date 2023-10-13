import styled from '@emotion/styled'
import { Meta, StoryObj } from '@storybook/react'
import { get } from 'lodash'
import React from 'react'
import { Theme, TypographyVariants, useTheme } from '../../../components/Theme'
import { Typography } from '../../../components/Typography'

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
  theme: Theme,
): {
  colors: Colors
  spacing: Spacing
  typography: TypographyTokens
} => {
  const rgbToHex = (r: number, g: number, b: number) =>
    '#' +
    [r, g, b]
      .map((val) => val.toString(16))
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
          rgb: theme.palette.primary,
          hex: rgbToHex(
            ...(theme.palette.primary
              .split(',')
              .map((x) => parseInt(x, 10)) as [number, number, number]),
          ),
        },
        {
          type: 'color',
          name: 'secondary',
          varName: '--lsd-theme-secondary',
          rgb: theme.palette.secondary,
          hex: rgbToHex(
            ...(theme.palette.secondary
              .split(',')
              .map((x) => parseInt(x, 10)) as [number, number, number]),
          ),
        },
      ],
    },
    ...keys.map(
      (key) =>
        ({
          name: key,
          tokens: ['primary', 'secondary'].map((ck) => ({
            name: ck,
            type: 'color',
            varName: `--lsd-${key}-${ck}`,
            rgb: get(theme.palette, key + '.' + ck),
            hex: rgbToHex(
              ...(get(theme.palette, key + '.' + ck)
                .split(',')
                .map((x: string) => parseInt(x, 10)) as [
                number,
                number,
                number,
              ]),
            ),
          })),
        } as Colors[number]),
    ),
  ]

  const spacing: Spacing = theme.spacing.map((spacing) => ({
    name: spacing.toString(),
    tokens: [
      {
        name: spacing.toString(),
        type: 'spacing',
        varName: `--lsd-spacing-${spacing}`,
        value: `${spacing}px`,
      },
    ],
  }))

  const typography: TypographyTokens = Object.entries(theme.typography).map(
    ([name, settings]) => ({
      name: name,
      tokens: [
        {
          name: 'fontSize',
          type: 'typography',
          value: `${settings.fontSize} (${remToPx(
            (settings.fontSize as string) || '',
          )}px)`,
          varName: `--lsd-typography-${name}-fontSize`,
        },
        {
          name: 'lineHeight',
          type: 'typography',
          value: `${settings.lineHeight} (${remToPx(
            (settings.lineHeight as string) || '',
          )}px)`,
          varName: `--lsd-${name}-lineHeight`,
        },
      ],
    }),
  )

  return {
    colors,
    spacing,
    typography,
  }
}

export const SpacingDesignTokens = () => {
  const theme = useTheme()
  const { spacing } = getDesignTokens(theme)

  return <Spacing spacing={spacing}></Spacing>
}

export const TypographyDesignTokens = () => {
  const theme = useTheme()
  const { typography } = getDesignTokens(theme)

  return <TypographyTable typography={typography}></TypographyTable>
}

export const ColorDesignTokens = () => {
  const theme = useTheme()
  const { colors } = getDesignTokens(theme)

  return (
    <>
      {colors.map((group) => (
        <ColorGroup name={group.name} tokens={group.tokens} />
      ))}
    </>
  )
}

const ColorGroup: React.FC<Colors[number]> = ({ name, tokens }) => {
  return (
    <ColorGroupRoot>
      <Typography className="color-group__name" component="div" variant="body1">
        {name}
      </Typography>
      <div className="color-group__tokens">
        {tokens.map((token) => (
          <ColorCard key={token.name} groupName={name} {...token} />
        ))}
      </div>
    </ColorGroupRoot>
  )
}

const ColorGroupRoot = styled.div`
  margin-bottom: var(--lsd-spacing-32);

  .color-group__name {
    width: calc(50% - var(--lsd-spacing-16));
    padding: var(--lsd-spacing-16) 0;
    border-bottom: 1px solid rgba(var(--lsd-border-primary), 0.2);
  }

  .color-group__tokens {
    display: flex;
    flex-direction: row;
    gap: var(--lsd-spacing-16);
    margin-top: var(--lsd-spacing-16);
  }
`

const ColorCard: React.FC<
  Colors[number]['tokens'][number] & { groupName: string }
> = ({ groupName, name, varName, rgb, hex }) => {
  return (
    <ColorCardRoot>
      <div
        className="color-card__color"
        style={{
          background: `rgb(var(${varName}))`,
        }}
      ></div>
      <div className="color-card__details">
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
        <div className="color-card__value">
          <Typography variant="label2" className="color-card__rgb">
            {name}
          </Typography>
          <Typography variant="label2" className="color-card__hex">
            {hex}
          </Typography>
        </div>
      </div>
    </ColorCardRoot>
  )
}

const ColorCardRoot = styled.div`
  width: 50%;
  border: 1px solid rgba(var(--lsd-border-primary), 0.2);

  .color-card__color {
    width: 100%;
    height: 100px;
    border-bottom: 1px solid rgba(var(--lsd-border-primary), 0.2);
  }

  .color-card__details {
    margin-top: var(--lsd-spacing-8);
    padding: var(--lsd-spacing-8);
  }

  .color-card__value {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: var(--lsd-spacing-8);
  }
`

export const Spacing: React.FC<{ spacing: Spacing }> = ({ spacing }) => {
  return (
    <Table>
      <thead>
        <th>Example</th>
        <th>CSS variable</th>
        <th>Value</th>
      </thead>
      <tbody>
        {spacing
          .flatMap((s) => s.tokens)
          .map((s, index) => (
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
    </Table>
  )
}

export const TypographyTable: React.FC<{ typography: TypographyTokens }> = ({
  typography,
}) => {
  return (
    <Table>
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
    </Table>
  )
}

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-top: var(--lsd-spacing-32);
  margin-bottom: var(--lsd-spacing-32);

  th {
    font-weight: normal;
  }

  th,
  td {
    border: 1px solid rgba(var(--lsd-border-primary), 0.2);
    padding: var(--lsd-spacing-8);
    text-align: left;
    color: rgb(var(--lsd-text-primary));
  }
`
