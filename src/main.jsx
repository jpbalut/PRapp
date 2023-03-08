
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import './styles.css'
import { WorkoutApp } from './WorkoutApp'
import {store} from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
    {/* <AppTheme> */}
        <WorkoutApp />
      {/* </AppTheme> */}
      </HashRouter>
    </Provider>
  </React.StrictMode>,
)

