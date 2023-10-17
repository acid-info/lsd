import React from 'react'

export type CalendarContextType = {
  focusedDate: Date | null
  size?: 'large' | 'medium' | 'small'
  mode?: 'date' | 'range'
  startDate: Date | null
  endDate: Date | null
  isDateFocused: (date: Date) => boolean
  isDateSelected: (date: Date) => boolean
  isDateHovered: (date: Date) => boolean
  isDateBlocked: (date: Date) => boolean
  isFirstOrLastSelectedDate: (date: Date) => boolean
  onDateFocus: (date: Date) => void
  onDateHover: (date: Date) => void
  onDateSelect: (date: Date) => void
  goToPreviousMonths: () => void
  goToNextMonths: () => void
  changeYearMode: boolean
  setChangeYearMode: (value: boolean) => void
  goToDate: (date: Date) => void
}

export const CalendarContext = React.createContext<CalendarContextType>(
  null as any,
)

export const useCalendarContext = () => React.useContext(CalendarContext)
