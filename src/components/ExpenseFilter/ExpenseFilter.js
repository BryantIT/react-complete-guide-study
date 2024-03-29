import React, { useState } from 'react'
// components
import ExpenseDate from '../ExpenseDate/ExpenseDate'
import Card from '../Wrappers/Card'
// css
import './style.css'

const ExpenseFilter = ({ filterExpenses }) => {
  const yearList = [2019, 2020, 2021, 2022]

  const handleChange = (e) => {
    const year = e.target.value
    filterExpenses(Number(year))
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter-control'>
        <label>Filter by year</label>
        <select onChange={handleChange}>
          <option value='default' defaultValue >YEAR</option>
          {
            yearList.map(year => (
              <option value={`${year}`}>{year}</option>
            ))
          }
        </select>
      </div>
    </div>
  )
}

export default ExpenseFilter
