import React from 'react'
import { getUserName } from '../../../Actions/conversaion'

export default class ChatBar extends React.Component {

  render () {
    console.log('here')
    return (
      <div className='chatBar' onClick={() => this.props.dispatch(getUserName(this.props.name + ' ' + this.props.lastName, this.props.messageId))}>
        <div className='profPic'>
          <img src={this.props.prof} alt=' ' width='10px' height='10px' />
        </div>
        <div className='textBox'>
          <div className='upperSec'>
            <div className='nameLname'>
              <span className='namee'> {this.props.name }</span>
              <span className='namee'> {this.props.lastName}</span>
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
