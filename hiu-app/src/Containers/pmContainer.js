import Pm from '../components/conversation/chat-screen/pm'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  messageList: state.conversations,
  idPerson: state.idnum,
  text: state.text1
})

export default connect(mapStateToProps)(Pm)
