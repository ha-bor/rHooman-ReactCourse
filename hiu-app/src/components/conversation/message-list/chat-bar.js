import React from 'react'
import { getUserName } from '../../../Actions/conversaion'

export default class ChatBar extends React.Component {

  render () {
    const profilePic = this.props.prof
    let firstName = String(this.props.name)
    let lastName = String(this.props.lastName)
    if ( firstName == 'null' ) {
      firstName = 'First Name'
    }
    if ( lastName == 'null' ) {
      lastName = 'Last Name'
    }
    console.log(this.props)
    console.log( firstName, lastName)
    return (
      <div className='chatBar' onClick={() => this.props.dispatch(getUserName(firstName, lastName, this.props.email, this.props.messageId))}>
        <div className='profPic'>
          <img src={profilePic} alt=' ' width='10px' height='10px' />
        </div>
        <div className='textBox'>
          <div className='upperSec'>
            <div className='nameLname'>
              <span className='namee'> {firstName }</span>
              <span className='namee'> {lastName}</span>
              <p className='namee'> {this.props.email} </p>
            </div>
            <div className='date'>
              <span id='datee'> sat 13:51 </span>
            </div>
          </div>
          <div className='lowerSec'>
            <div className='lastMes'>
              <span id='mes'> {this.props.lastM} </span>
            </div>
            <div className='notSeen'>
              <span id='nS'> {this.props.notSeen} </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
