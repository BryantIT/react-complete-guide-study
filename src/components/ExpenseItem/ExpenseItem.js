import React, { Fragment } from 'react'
// css
import './style.css'

const ExpenseItem = () => {
  return (
    <div className='expense-item'>
      <div>Date</div>
      <div className='expense-item-description'>
        <h2>Title</h2>
        <div className='expense-item-price'>Amount</div>
      </div>
    </div>
  )
}

export default ExpenseItem
