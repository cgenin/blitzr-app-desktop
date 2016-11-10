// @flow
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Channels from '../components/Channels';
import * as ChannelsActions from '../actions/channels';

function mapStateToProps(state: Object) {
  return state.channels;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ChannelsActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Channels);
