import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {Provider} from 'react-redux'
import {store} from './store'
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)

// call api example
fetch('/api')
  .then((res) => res.json())
  .then((res) => console.log(res))
