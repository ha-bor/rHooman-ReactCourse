import { connect } from 'react-redux'
import ChatBar from '../components/conversation/message-list/chat-bar'

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})
export default connect(mapDispatchToProps)(ChatBar)
