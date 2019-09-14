import React from 'react'
import './mainscrn.css'
import { getMessage } from '../../Actions/conversaion'

export default class Footer extends React.Component {
  constructor () {
    super()
    this.state = {
      text: ''
    }
  }
  
  
  messageHandler (e) {
    this.setState({ text: e.target.value }, ()=> {
      console.log(this.state.text)      
    })
  }

  handleSend () {
    this.props.dispatch(getMessage(this.state.text))
    console.log('aaaa', this.state.text)
    this.setState({text: '' })
  }

  render () {
    return (
      <div className='lowerBar' >
        <input type=' text' name='chatInput' className='inputChat' value={this.state.text} placeholder='type here...' onChange={(event) => this.messageHandler(event)} />
        <button className='sendBut' onClick={() => {
          window.localStorage.setItem('isSent', 1)
          this.handleSend()}}> => </button>
      </div >
    )
  }
}
