// components
import ExpenseDate from '../ExpenseDate/ExpenseDate'
import Card from '../Wrappers/Card'
// css
import './style.css'

const ExpenseItem = ({ id, title, amount, date }) => {
  
  return (
    <Card className='expense-item' id={id}>
      <div>
        <ExpenseDate date={date} />
      </div>
      <div className='expense-item-description'>
        <h2>{title}</h2>
        <div className='expense-item-price'>${amount}</div>
      </div>
    </Card>
  )
}

export default ExpenseItem
