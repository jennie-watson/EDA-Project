import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Nav from './Nav'
import Investing from './Investing'
import Pf101 from './Pf101'
import Resources from './Resources'
import SavingTips from './Saving-tips'
import Contact from './Contact'
import Footer from './Footer'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className='app' className='container' className='content'>
          <Route path='/' component={Nav} />
          <Route exact path='/' component={Home} />
          <Route path='/' component={Footer} />
          <Route path='/investing' component={Investing} />
          <Route path='/personalfinance101' component={Pf101} />
          <Route path='/resources' component={Resources} />
          <Route path='/savingtips' component={SavingTips} />
          <Route path='/contact' component={Contact} />
        </div>
      </Router>
    )
  }}

export default App
