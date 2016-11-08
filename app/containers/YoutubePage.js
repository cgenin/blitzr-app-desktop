// @flow
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Youtube from '../components/Youtube';
import * as youtubeActions from '../actions/youtube-search';


function mapStateToProps(state) {
  const {q, items} = state.youtubeSearch;
  return {q, items};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(youtubeActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Youtube);
