import React, { useState } from 'react'
// css
import './style.css'

const ExpenseForm = ({ onSave }) => {
  // States
  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: '',
  })

  const changeHandler = (e) => {
    const value = e.target.value
    const label = e.target.id

    setUserInput((prevState) => {
      return { ...prevState, [label]: value }
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    const submittedData = userInput
    onSave(submittedData)
    setUserInput(() => {
      return { title: '', amount: '', date: '' }
    })
  }

  return (
    <div className='new-expense'>
      <form onSubmit={submitHandler}>
        <div className='new-expense-controls'>
          <div className='new-expense-control'>
            <label>Title</label>
            <input type='text' id='title' value={userInput.title} onChange={changeHandler} />
          </div>
          <div className='new-expense-control'>
            <label>Amount</label>
            <input
              type='number'
              id='amount'
              value={userInput.amount}
              min='0.01'
              step='0.01'
              onChange={changeHandler}
            />
          </div>
          <div className='new-expense-control'>
            <label>Date</label>
            <input
              type='date'
              id='date'
              value={userInput.date}
              min='01-01-2019'
              max='12-31-2024'
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className='new-expense-actions'>
          <button type='submit'>Add Expense</button>
        </div>
      </form>
    </div>
  )
}

export default ExpenseForm
