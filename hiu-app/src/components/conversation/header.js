import React from 'react'
import './mainscrn.css'

export default class Header extends React.Component {
//   constructor () {
//     super()
//   }

  render () {
    return (
      <div className='topBar'>
        <span className='topText'>{this.props.userName}</span>
      </div>
    )
  }
}
