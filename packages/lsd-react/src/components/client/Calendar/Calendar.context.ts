import React from 'react'

export type CalendarContextType = {
  size?: 'large' | 'medium' | 'small'
  mode?: 'date' | 'range'
  startDate: Date | null
  endDate: Date | null
  onDateFocus: (date: Date) => void
  goToPreviousMonths: () => void
  goToNextMonths: () => void
  onDateSelect: (date: Date) => void
  changeYearMode: boolean
  setChangeYearMode: (value: boolean) => void
  goToDate: (date: Date) => void
}

export const CalendarContext = React.createContext<CalendarContextType>(
  null as any,
)

export const useCalendarContext = () => React.useContext(CalendarContext)
