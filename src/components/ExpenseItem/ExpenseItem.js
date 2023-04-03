import React, { useState } from 'react'
// components
import ExpenseDate from '../ExpenseDate/ExpenseDate'
import Card from '../Wrappers/Card'
// css
import './style.css'

const ExpenseItem = ({ expense }) => {
  
  return (
    <Card className='expense-item' key={expense.id}>
      <div>
        <ExpenseDate date={expense.date} />
      </div>
      <div className='expense-item-description'>
        <h2>{expense.title}</h2>
        <div className='expense-item-price'>${expense.amount}</div>
      </div>
    </Card>
  )
}

export default ExpenseItem
