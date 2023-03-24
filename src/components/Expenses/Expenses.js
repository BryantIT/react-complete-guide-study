// components
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import Card from '../Wrappers/Card'
// css
import './style.css'

const Expenses = ({ expenses }) => {

  return (
    <Card className='expenses'>
      {expenses.map((expense) => (
        <ExpenseItem
          expense={expense}
        />
      ))}
    </Card>
  )
}

export default Expenses
