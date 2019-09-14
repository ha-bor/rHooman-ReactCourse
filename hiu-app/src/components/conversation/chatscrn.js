import React from 'react'
import './mainscrn.css'
import ChatBarContainer from '../../Containers/chatBarContainer'
import { createNewConversation } from '../../Actions/conversaion'
import axios from 'axios'

export default class Chatscrn extends React.Component {
  constructor () {
    super()
    this.state = {
      newconv: '',
      suggestions: [],
      id: window.localStorage.getItem('id'),
      token: window.localStorage.getItem('token'),
      messages: [],
      id1: window.localStorage.getItem('id1')
    }
  }

  componentDidMount () {
    const ftoken = new FormData()
    ftoken.append('token', this.state.token)
    console.log(ftoken)
    axios.get('https://api.paywith.click/conversation/', { params: {
      token: this.state.token
    } })
      .then((response) => {
        this.setState({ messages: response.data.data.conversation_details })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  handleSearch (event) {
    const fdata = new FormData()
    fdata.append('token', this.state.token)
    fdata.append('query', event.target.value)
    fdata.append('size', 4)
    axios.post('https://api.paywith.click/explore/search/contacts/', fdata)
      .then((response) => {
        this.setState({ suggestions: response.data.data.users })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  handleClick () {
    this.props.dispatch(createNewConversation(this.state.newconv))
    this.setState({ newconv: '' })
  }

  makeConversation (uid) {
    const fmc = new FormData()
    fmc.append('token', this.state.token)
    fmc.append('user_id', uid)
    axios.post('https://api.paywith.click/conversation/', fmc)
      .then((response) => {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render () {
    console.log(this.state.messages)
    return (
      <div className='messList'>
        <div className='ssss'>
          <input id='sbar' placeholder='....' onChange={(e) => this.handleSearch(e)} />
          <button id='profComp'> Complete your profile </button>
        </div>
        <div>
          {
            this.state.suggestions.map((user, index) => {
              return (
                <p key={index} className='searched' onClick={() => this.makeConversation(user.id)}>
                  {user.email}
                </p>
              )
            })
          }
          {this.state.messages.map((item, idx) => {
            return (
              item.users.map((itemm, index) => {
                console.log(item)
                if (itemm.id != this.state.id) {
                  return (
                    <ChatBarContainer key={index}
                      name={itemm.email}
                      lastName={itemm.lastName}
                      lastM={item.lastest_messages}
                      notSeen={item.unSeen}
                      prof={item.profPic} 
                      messageId={item.id} />
                  )
                }
              })
            )
          })

          }
        </div>
      </div>
    )
  }
}
