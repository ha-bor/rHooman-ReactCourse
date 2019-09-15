import React from 'react'
import './mainscrn.css'

export default class Header extends React.Component {
//   constructor () {
//     super()
//   }

  render () {
    console.log(this.props)
    return (
      <div className='topBar'>
        <div className='cred'>
            <div className='credT'>
              <span> {this.props.userFName} </span>
              <span> {this.props.userLName} </span>
            </div>
            <div className='credB'>
              <span> {this.props.userEmail} </span>
            </div>
        </div>
        <div className='profBox'>
          <img src={this.props.userPic} alt='' />
        </div>
      </div>
    )
  }
}
