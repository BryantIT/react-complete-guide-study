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
  const [shouldDisplayList, setShouldDisplayList] = useState(true)

  const filterExpenses = (year) => {
    if (isNaN(year)) {
      setDisplayedExpenses(expenses)
      return
    }
    const filtered = expenses.filter(
      (expense) => expense.date.getFullYear() === year
    )
    if (filtered.length === 0) {
      setShouldDisplayList(false)
      return
    }
    setShouldDisplayList(true)
    setDisplayedExpenses(filtered)
  }

  return (
    <Fragment>
      <Card className='expenses'>
        <ExpenseFilter filterExpenses={filterExpenses} />
        {shouldDisplayList ? (
          displayedExpenses.map((expense) => (
            <ExpenseItem key={expense.id} expense={expense} />
          ))
        ) : (
          <p className='info'>No Expenses To Show</p>
        )}
      </Card>
    </Fragment>
  )
}

export default Expenses
