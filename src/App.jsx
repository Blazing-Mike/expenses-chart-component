import React, { useState } from "react";
import BarChart from "./components/BarChart";
import ChartFooter from "./components/ChartFooter";
import Header from "./components/Header";

const App = ({data}) => {
  return (
    <div className="outer-container">
            <Header />
    <div className="expense-container">
        <BarChart data={data}/>
        <ChartFooter />
    </div>
    </div>
  );
};

export default App;

// Spending - Last 7 days

// mon
// tue
// wed
// thu
// fri
// sat
// sun

// Total this month
// $478.33

// +2.4%
// from last month
