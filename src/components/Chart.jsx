const Chart = ({ children, width, height }) => (
    <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height} className="chart-area">
      {children}
    </svg>
  )

  export default Chart;