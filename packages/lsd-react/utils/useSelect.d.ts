export type SelectOption = {
  name: string
  value: string
}
export declare const useSelect: (
  options: SelectOption[],
  value: string | string[],
  {
    onDone,
    onChange,
    multi,
  }?: {
    multi?: boolean | undefined
    onDone?: ((value: string | string[]) => void) | undefined
    onChange?: ((value: string | string[]) => void) | undefined
  },
) => {
  selected: SelectOption[]
  isSelected: (option: string | SelectOption) => boolean
  select: (option: string | SelectOption) => void
}
