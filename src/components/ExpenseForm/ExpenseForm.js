import React, { useState } from 'react'
// css
import './style.css'

const ExpenseForm = () => {
  // States
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')

  const titleChangeHandler = (e) => {
    setTitle(e.target.value)
  }
  
  const amountChangeHandler = (e) => {
    setAmount(e.target.value)
  }

  const dateChangeHandler = (e) => {
    setDate(e.target.value)
  }

  return (
    <div className='new-expense'>
      <form>
        <div className='new-expense-controls'>
          <div className='new-expense-control'>
            <label>Title</label>
            <input type='text' onChange={titleChangeHandler} />
          </div>
          <div className='new-expense-control'>
            <label>Amount</label>
            <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} />
          </div>
          <div className='new-expense-control'>
            <label>Date</label>
            <input type='date' min='2019-01-01' max='2024-12-31' onChange={dateChangeHandler} />
          </div>
        </div>
        <div className='new-expense-actions'>
          <button type='sumbit'>Add Expense</button>
        </div>
      </form>
    </div>
  )
}

export default ExpenseForm
