import React from 'react'
import ReactDOM from 'react-dom'
import { ContextProvider } from './Contexts/ContextProvider'

import './index.css'
import App from './App'

ReactDOM.render(
  <ContextProvider>
    <div className="App">
      <div className="board">
        <App />
      </div>
    </div>
  </ContextProvider>,
  document.getElementById('root')
)
