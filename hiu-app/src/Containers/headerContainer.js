import Header from '../components/conversation/header'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  userFName: state.firstname,
  userLName: state.lastname,
  userEmail: state.useremail,
  userPicture: state.userpic
})
export default connect(mapStateToProps)(Header)
