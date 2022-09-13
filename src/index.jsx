import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import data from './data'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App data={data}/>
  </React.StrictMode>
)
