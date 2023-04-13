// components
import ExpenseForm from '../ExpenseForm/ExpenseForm'
// css
import './style.css'

const NewExpense = ({ newExpenseHandler }) => {
  const onSaveHandler = (data) => {
    data.id = Math.random().toString()
    newExpenseHandler(data)
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSave={onSaveHandler}/>
    </div>
  )
}

export default NewExpense
