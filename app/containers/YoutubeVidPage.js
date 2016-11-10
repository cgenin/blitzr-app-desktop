// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import YoutubeVid from '../components/YoutubeVid';


function mapStateToProps(state) {
  const {q, items} = state.youtubeSearch;
  return {q, items};
}

export default connect(mapStateToProps)(YoutubeVid);
