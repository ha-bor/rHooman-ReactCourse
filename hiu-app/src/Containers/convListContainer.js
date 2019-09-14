import { connect } from 'react-redux'
import Chatscrn from '../components/conversation/chatscrn'

const mapStateToProps = (state) => ({
  conversationList: state.conversationList
})
const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Chatscrn)
