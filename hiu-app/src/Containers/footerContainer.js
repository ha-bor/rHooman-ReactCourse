import Footer from '../components/conversation/footer.js'
import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

const mapStateToProps = (state) => ({
  textt: state.text
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
