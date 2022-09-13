import data from "../data";
import Chart from "./Chart";
import Bar from "./Bar";

const BarChart = ({data}) => {
    const itemWidth = 38;
    const itemMargin = 15;
    const dataLength = data.length;

    const massagedData = data.map(datum =>
        Object.assign({}, datum, { amount: datum.amount * 0.25 })
      )
    
    //   const highestAmount = massagedData.reduce((acc, cur) => {
    //     const { amount } = cur
    //     return amount > acc ? amount : acc
    //   }, 0)

      const chartHeight = 250;

    return ( 
        <div className="chart-container">
        <h3 className="big-heading">Spending - Last 7 days</h3>
        <Chart width={dataLength * (itemWidth + itemMargin)} height={chartHeight}>
        {massagedData.map((datum, index) => {
          const itemHeight = datum.amount *  15;
          return (
            <Bar
            key={datum.day}
            x={index * (itemWidth + itemMargin)}
            y={chartHeight - itemHeight - 20}
            width={itemWidth}
            height={itemHeight}
            /> 
          )
        })}
        {massagedData.map((datum, index) => {
            const itemHeight = datum.amount *  15;
        const { day, amount } = datum
        return (
            <text  
            x={index * (itemWidth + itemMargin + 2)}
            y={250} 
            key={day}
            className="bar-label-day" 
            >
            {day}
            </text>
        )
      })}
      </Chart>
  
      </div>
     );
}
 
export default BarChart;