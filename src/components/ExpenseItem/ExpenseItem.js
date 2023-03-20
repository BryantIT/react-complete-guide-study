import React, { Fragment } from 'react'
// css
import './style.css'

const ExpenseItem = () => {
  return (
    <Fragment>
      <div>Date</div>
      <div>
        <h2>Title</h2>
        <div>Amount</div>
      </div>
    </Fragment>
  )
}

export default ExpenseItem
