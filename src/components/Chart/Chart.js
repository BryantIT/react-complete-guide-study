// css
import './style.css'
// components
import ChartBars from '../ChartBars/ChartBars'

const Chart = ({ data }) => {
  return (
    <div className='chart'>
      {data.map((item) => (
        <ChartBars
          key={item.label}
          value={item.value}
          maxValue={null}
          label={item.label}
        />
      ))}
    </div>
  )
}

export default Chart
