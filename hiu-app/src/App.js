import React from 'react'
import './App.css'
import Mainscrn from './components/conversation/mainscrn.js'
import Login from './components/login/login.js'
import SignUp from './components/singup/signup.js'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import {createStore } from 'redux'
import conversation from './reducers/conversation.js'

const store = createStore(conversation)

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Route path='/' exact component={Login} />
          <Route path='/signup/' component={SignUp} />
          <Route path='/messenger/' component={Mainscrn} />
        </Router>
      </Provider>
    )
  }
}

export default App
