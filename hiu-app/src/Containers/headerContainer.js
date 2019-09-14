import Header from '../components/conversation/header'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  userName: state.name
})
export default connect(mapStateToProps)(Header)
