import clsx from 'clsx'
import omit from 'lodash/omit'
import pick from 'lodash/pick'
import { GlobalTypographyStyles } from '../components/Theme'
import { typographyClasses } from '../components/Typography/Typography.classes'

export type CommonProps = {
  genericFontFamily?: 'inherit' | GlobalTypographyStyles['genericFontFamily']
}

export const commonPropKeys: [keyof CommonProps] = ['genericFontFamily']

export const useCommonProps = ({ genericFontFamily }: CommonProps) => {
  return {
    className: clsx(
      genericFontFamily === 'serif' && typographyClasses.serif,
      genericFontFamily === 'monospace' && typographyClasses.monospace,
      genericFontFamily === 'sans-serif' && typographyClasses.sansSerif,
    ),
  }
}

export const pickCommonProps = <T extends CommonProps>(props: T) =>
  pick(props, commonPropKeys)

export const omitCommonProps = <T extends CommonProps>(props: T) =>
  omit(props, commonPropKeys)
