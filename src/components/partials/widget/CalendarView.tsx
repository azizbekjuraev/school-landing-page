import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

const CalendarView: React.FC = () => {
  const [value, onChange] = useState<Date>(new Date())
  return (
    <div>
      <Calendar onChange={value => onChange(value as Date)} value={value} />
    </div>
  )
}

export default CalendarView
