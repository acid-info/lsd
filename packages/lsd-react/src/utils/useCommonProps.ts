import clsx from 'clsx'
import omit from 'lodash/omit'
import pick from 'lodash/pick'
import styles from '../components/client/Typography/Typography.module.css'
import { TypographyGenericFontFamily } from '../theme'

export type CommonProps = {
  genericFontFamily?: TypographyGenericFontFamily
  styles?: string
}

export const commonPropKeys: [keyof CommonProps] = ['genericFontFamily']

export const useCommonProps = ({ genericFontFamily }: CommonProps) => {
  return {
    className: clsx(
      genericFontFamily === 'serif' && styles.serif,
      genericFontFamily === 'monospace' && styles.monospace,
      genericFontFamily === 'sans-serif' && styles.sansSerif,
    ),
  }
}

export const pickCommonProps = <T extends CommonProps>(props: T) =>
  pick(props, commonPropKeys)

export const omitCommonProps = <T extends CommonProps>(props: T) =>
  omit(props, commonPropKeys)
