import React from 'react'
import './chat-scr.css'
import axios from 'axios'

export default class Pm extends React.Component {
  constructor () {
    super()
    this.state = {
      id: window.localStorage.getItem('id'),
      token: window.localStorage.getItem('token'),
      messageList: []
    }
  }

  getConversation () {
    console.log('id person',this.props.idPerson)
    const fmes = new FormData()
    fmes.append('size', 5)
    fmes.append('date', ((new Date().getTime() / 1000).toFixed(0)))
    fmes.append('conversation_id', this.props.idPerson)
    fmes.append('token', this.state.token)
    axios.post('https://api.paywith.click/conversation/details/', fmes)
      .then((response) => {
        this.setState({ messageList: response.data.data.messages })
        console.log('rrrrr', response)
      })
      .catch(function (error) {
        console.log('rrrrrrrrrrr', error)
      })
  }

  sendMessage () {
    console.log('im done', this.props.text)
    const fsend = new FormData()
    fsend.append('token', this.state.token)
    fsend.append('conversation_id', this.props.idPerson)
    fsend.append('text', this.props.text)
    axios.post('https://api.paywith.click/conversation/create/', fsend)
      .then((response) => {
        console.log('done')
      })
      .catch(function (error) {
        console.log('rrrrrrrrrrr', error)
      })
  }

  render () {
    if (window.localStorage.getItem('isSent') == 1) {
      this.sendMessage()
      window.localStorage.setItem('isSent', 0)
    }
    return (
      <div>
        <button className='aaaa' onClick={() => this.getConversation()}> refresh </button>
        <div className='main'>
          {this.state.messageList.map((message, index) => {
            // console.log('senderId',message.sender.id)
            // console.log('myId: ', this.state.id)
            if (message.sender.id == this.state.id) {
              return (
                <div className='sent'> <span className='sen'> {message.text} </span> </div>
              )
            } else {
              return (
                <div className='recieved'> <span className='rec'> {message.text} </span> </div>
              )
            }
          })
          }
        </div>
      </div>
    )
  }
}
