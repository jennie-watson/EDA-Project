import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import Footer from './components/Footer'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
  [<App key='1' />, <Footer key='2' />], 
    document.getElementById('app')
  )
})
