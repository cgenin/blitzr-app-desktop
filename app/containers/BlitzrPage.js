// @flow
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Blitzr from '../components/Blitzr';
import * as ScreensActions from '../actions/screens';

function mapStateToProps(state) {
  return {
    screenHeight: state.screens.height,
    screenWidth: state.screens.width
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ScreensActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Blitzr);