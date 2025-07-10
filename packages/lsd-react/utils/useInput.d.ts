import React from 'react'
export type InputValueType =
  | React.InputHTMLAttributes<HTMLInputElement>['value']
  | boolean
export type InputOnChangeType =
  React.InputHTMLAttributes<HTMLInputElement>['onChange']
export type InputProps<T extends InputValueType = InputValueType> = {
  value?: T
  defaultValue: T
  onChange?: InputOnChangeType
  ref?: React.RefObject<HTMLInputElement>
  getInput?: () => HTMLInputElement
}
export declare const useInput: <T extends InputValueType = InputValueType>(
  props: InputProps<T>,
) => {
  value: T
  filled: boolean
  onChange: React.ChangeEventHandler<HTMLInputElement>
  setValue: (value: InputValueType) => void
}
