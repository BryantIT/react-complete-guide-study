// css
import './style.css'

const ExpenseDate = ({ date }) => {
  if (typeof date === 'string') {
    date = date.split('-')
    const day = Number(date[2])
    const month = Number(date[1])
    const year = Number(date[0])
    date = new Date(year, day, month)
  }
  const month = date.toLocaleString('en-US', { month: 'long' })
  const day = date.toLocaleString('en-US', { day: '2-digit' })
  const year = date.getFullYear()

  return (
    <div className='expense-date'>
      <div className='expense-date-month'>{month}</div>
      <div className='expense-date-day'>{day}</div>
      <div className='expense-date-year'>{year}</div>
    </div>
  )
}

export default ExpenseDate
