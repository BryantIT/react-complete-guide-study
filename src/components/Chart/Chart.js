// css
import './style.css'
// components
import ChartBars from '../ChartBars/ChartBars'

const Chart = ({ chartData }) => {
  const values = chartData.map(point => point.value)
  const max = Math.max(...values)

  return (
    <div className='chart'>
      {chartData.map((item) => (
        <ChartBars
          key={item.label}
          value={item.value}
          maxValue={max}
          label={item.label}
        />
      ))}
    </div>
  )
}

export default Chart
