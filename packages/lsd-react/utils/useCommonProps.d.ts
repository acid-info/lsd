import { TypographyGenericFontFamily } from '../theme'
export type CommonProps = {
  genericFontFamily?: TypographyGenericFontFamily
  styles?: string
}
export declare const commonPropKeys: [keyof CommonProps]
export declare const useCommonProps: ({ genericFontFamily }: CommonProps) => {
  className: string
}
export declare const pickCommonProps: <T extends CommonProps>(
  props: T,
) => Pick<T, keyof CommonProps>
export declare const omitCommonProps: <T extends CommonProps>(
  props: T,
) => import('lodash').Omit<T, keyof CommonProps>
