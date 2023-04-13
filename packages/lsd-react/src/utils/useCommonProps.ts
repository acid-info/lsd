import clsx from 'clsx'
import { GlobalTypographyStyles } from '../components/Theme'
import { typographyClasses } from '../components/Typography/Typography.classes'

export type CommonProps = {
  genericFontFamily?: 'inherit' | GlobalTypographyStyles['genericFontFamily']
}

export const useCommonProps = ({ genericFontFamily }: CommonProps) => {
  return {
    className: clsx(
      genericFontFamily === 'serif' && typographyClasses.serif,
      genericFontFamily === 'monospace' && typographyClasses.monospace,
      genericFontFamily === 'sans-serif' && typographyClasses.sansSerif,
    ),
  }
}
