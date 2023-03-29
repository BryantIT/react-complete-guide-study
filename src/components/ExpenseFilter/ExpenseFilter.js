import React, { useState } from 'react'
// components
import ExpenseDate from '../ExpenseDate/ExpenseDate'
import Card from '../Wrappers/Card'
// css
import './style.css'

const ExpenseFilter = ({ getSelectedYear }) => {
  const [selectedYear, setSelectedYear] = useState()
  const yearList = [2019, 2020, 2021, 2022]

  const handleChange = (e) => {
    const year = e.target.value
    if (year === 'default') {
      return
    }
    getSelectedYear(year)
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter-control'>
        <label>Filter by year</label>
        <select onChange={handleChange}>
          <option value='default' selected>YEAR</option>
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
