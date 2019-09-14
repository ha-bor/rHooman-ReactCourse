import React from 'react'
import './signup.css'
import validate from './../../validation/ValidateFunction.js'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { withRouter } from 'react-router'

class SignUp extends React.Component {
  constructor () {
    super()
    this.state = {
      fields: {
        email: '',
        password: ''
      },
      errors: {
        email: '',
        password: ''
      },
      error: ''
    }
  }

  //   passwordHandler (event) {
  //     this.setState({ password: event.target.value })
  //   }

  //   emailHandler (event) {
  //     this.setState({ email: event.target.value })
  //   }

  eventHandler (event) {
    const name = event.target.name
    this.setState({ [name]: event.target.value })
  }

  eventHandler2 (event) {
    const name = event.target.name
    this.setState({ ...this.state, fields: { ...this.state.fields, [name]: event.target.value } })
  }

  handleError () {
    const errors = {
      email: validate('email', this.state.fields.email),
      password: validate('password', this.state.fields.password)
    }
    console.log('err: ', errors)
    this.setState({ errors })
  }

  handleRequest () {
    axios.post('https://api.paywith.click/auth/signup/', {
      email: this.state.fields.email,
      password: this.state.fields.password
    })
      .then((response) => {
        window.localStorage.setItem('token', response.data.token)
        this.props.history.push('/')
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render () {
    return (
      <div className='mainPage'>
        <div className='mainFrame'>
          <div className='textArea'>
            <p className='welText'>Welcome to <i>HiuApp</i></p>
          </div>
          <div className='inputArea'>
            <div className='inputHolders'>
              <input className='inputBox' type='text' placeholder='email' name='email' onChange={(event) => this.eventHandler2(event)} />
              <span className='error'> {this.state.errors.email} </span>
            </div>
            <div className='inputHolders'>
              <input className='inputBox' type='password' placeholder='password' name='password' onChange={(event) => this.eventHandler2(event)} />
              <span className='error'> {this.state.errors.password} </span>
            </div>
          </div>
          <div className='sub'>
            <button className='subBut' onClick={() => this.handleRequest()}>Sign Up!</button>
          </div>
          <Link to='/' className='lll'>Already registered? Click here</Link>
        </div>
      </div>
    )
  }
}


export default withRouter(SignUp)