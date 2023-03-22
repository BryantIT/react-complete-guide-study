import React, { Fragment } from 'react'
// css
import './style.css'

const ExpenseItem = ({ id, title, amount, date }) => {

  return (
    <div className='expense-item' id={id}>
      <div>{date.toString()}</div>
      <div className='expense-item-description'>
        <h2>{title}</h2>
        <div className='expense-item-price'>${amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem
