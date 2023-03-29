import React, { Fragment, useState } from 'react'
// components
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import Card from '../Wrappers/Card'
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter'
// css
import './style.css'

const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState()

  const getSelectedYear = (year) => {
    setSelectedYear(year)
  }

  return (
    <Fragment>
      <Card className='expenses'>
      <ExpenseFilter  getSelectedYear={getSelectedYear}/>
      {expenses.map((expense) => (
        <ExpenseItem
          expense={expense}
        />
      ))}
    </Card>
    </Fragment>
  )
}

export default Expenses
