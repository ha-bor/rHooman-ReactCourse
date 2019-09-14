import React from 'react'
import './login.css'
import validate from './../../validation/ValidateFunction.js'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { withRouter } from 'react-router'

class Login extends React.Component {
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
      }
    }
  }

  eventHandler (event) {
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
    console.log('stateee: ', this.state.fields)
    axios.post('https://api.paywith.click/auth/signin/', {
      email: this.state.fields.email,
      password: this.state.fields.password
    })
      .then((response) => {
        console.log('stateee: ', this.state.fields)
        console.log(response.data.data.profile.id)
        window.localStorage.setItem('token', response.data.data.token)
        window.localStorage.setItem('id', response.data.data.profile.id)
        this.props.history.push('/messenger/')
        
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
            <p className='welText'>Welcome back to <i>HiuApp</i></p>
          </div>
          <div className='inputArea'>
            <div className='inputHolders'>
              <input className='inputBox' type='text' placeholder='email' name='email' onChange={(event) => this.eventHandler(event)} />
              <span className='error'> {this.state.errors.email} </span>
            </div>
            <div className='inputHolders'>
              <input className='inputBox' type='password' placeholder='password' name='password' onChange={(event) => this.eventHandler(event)} />
              <span className='error'> {this.state.errors.password} </span>
            </div>
          </div>
          <div className='sub'>
            <button className='subBut' onClick={() => this.handleRequest()}>Log in!</button>
          </div>
          <Link to='/signup/' className='ll'>Not a member? Sign Up!</Link>
        </div>
      </div>
    )
  }
}

export default withRouter(Login)
