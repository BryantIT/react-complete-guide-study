import React, { useState } from 'react'
// components
import ExpenseDate from '../ExpenseDate/ExpenseDate'
import Card from '../Wrappers/Card'
// css
import './style.css'

const ExpenseItem = ({ expense }) => {
  const [title, setTitle] = useState(expense.title)
  const [id, setID] = useState(expense.id)
  const [date, setDate] = useState(expense.date)
  const [amount, setAmount] = useState(expense.amount)

  const clickHandler = () => {
    setTitle('updated')
  }
  
  return (
    <Card className='expense-item' key={id}>
      <div>
        <ExpenseDate date={date} />
      </div>
      <div className='expense-item-description'>
        <h2>{title}</h2>
        <div className='expense-item-price'>${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  )
}

export default ExpenseItem
