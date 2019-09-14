import React from 'react'
import './mainscrn.css'
// import ChatBarContainer from '../../Containers/chatBarContainer'
import MChat from './chat-screen/mainchat.js'
// import Footer from './footer'
import HeaderContainer from '../../Containers/headerContainer'
import FooterContainer from '../../Containers/footerContainer'
import Chatscrn from './chatscrn.js'
import ConvListContainer from '../../Containers/convListContainer'

export default class Mainscrn extends React.Component {
  render () {
    return (
      <div className='mainscrn'>
        <ConvListContainer />
        <div className='chatScrn'>
          <HeaderContainer />
          <MChat />
          <FooterContainer />
        </div>
      </div>
    )
  }
}
