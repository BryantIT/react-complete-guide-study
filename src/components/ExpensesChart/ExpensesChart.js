// css
import './style.css'
// components
import Chart from '../Chart/Chart'

const ExpensesChart = ({ displayedExpenses }) => {
  const monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const chartData = monthsArray.map(month => {
    return {
      label: month,
      value: 0
    }
  })

  if (displayedExpenses && displayedExpenses.length > 0) {
    for (const expense of displayedExpenses) {
      const month = expense.date.getMonth()
      chartData[month].value += expense.amount
    }
  }

  return (
    <Chart chartData={chartData}/>
  )
}

export default ExpensesChart
