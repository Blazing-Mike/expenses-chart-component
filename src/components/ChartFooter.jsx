const ChartFooter = () => {
    return ( 
        <footer className="chart-footer">
      <div className="left-container">
                <p className="para">  Total this month</p>
                <h4 className="bold big-heading">  $478.33</h4>
            </div>

            <div className="right-container">
        <h5 className="small-heading right">+2.4%</h5>
        <p className="para">from last month</p>
            </div>
        </footer>
     );
}
 
export default ChartFooter;