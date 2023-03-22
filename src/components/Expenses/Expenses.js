import React, { Fragment } from 'react'
// components
import ExpenseItem from '../ExpenseItem/ExpenseItem'
// css
import './style.css'

const Expenses = ({ expenses }) => {

  return (
    <div className='expenses'>
      {expenses.map((expense) => (
        <ExpenseItem
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  )
}

export default Expenses
