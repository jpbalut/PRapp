import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles.css'
import { WorkoutApp } from './WorkoutApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <AppTheme> */}
      <WorkoutApp />
      {/* </AppTheme> */}
    </BrowserRouter>
  </React.StrictMode>,
)

