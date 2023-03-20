import React, { Fragment } from 'react'
// css
import './style.css'

const ExpenseItem = () => {
  const newDate = new Date(2021, 2, 28)
  const expenseDate = newDate.toString()
  const expenseTitle = 'Car Insurance'
  const expenseAmount = 294.67

  return (
    <div className='expense-item'>
      <div>{expenseDate}</div>
      <div className='expense-item-description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item-price'>${expenseAmount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem
