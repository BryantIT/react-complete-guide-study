// css
import './style.css'

const ExpenseDate = ({ date }) => {
  const formatedDate = new Date(date)
  const month = formatedDate.toLocaleString('en-US', { month: 'long' })
  const day = formatedDate.toLocaleString('en-US', { day: '2-digit' })
  const year = formatedDate.getFullYear()

  return (
    <div className='expense-date'>
      <div className='expense-date-month'>{month}</div>
      <div className='expense-date-day'>{day}</div>
      <div className='expense-date-year'>{year}</div>
    </div>
  )
}

export default ExpenseDate
