// @flow
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import YoutubeVid from '../components/YoutubeVid';
import * as youtubeActions from '../actions/youtube-search';


function mapStateToProps(state) {
  const {q, items} = state.youtubeSearch;
  console.log(state);
  return {q, items};
}

export default connect(mapStateToProps)(YoutubeVid);
