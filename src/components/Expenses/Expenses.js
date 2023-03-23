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
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  )
}

export default Expenses
