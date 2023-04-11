import React, { Fragment, useState } from 'react'
// components
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import Card from '../Wrappers/Card'
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter'
// css
import './style.css'

const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState()
  const [displayedExpenses, setDisplayedExpenses] = useState(expenses)


  const filterExpenses = (year) => {
    if (isNaN(year)) {
      setDisplayedExpenses(expenses)
      return
    }
    const filtered = expenses.filter(expense => expense.date.getFullYear() === year)
    setDisplayedExpenses(filtered)
  }

  return (
    <Fragment>
      <Card className='expenses'>
      <ExpenseFilter  filterExpenses={filterExpenses}/>
      {displayedExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
        />
      ))}
    </Card>
    </Fragment>
  )
}

export default Expenses
