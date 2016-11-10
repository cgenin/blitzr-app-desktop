// @flow
import React, {Component} from 'react';
import {Link} from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import  {YOUTUBE_URL} from '../env';

export default class YoutubeVid extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <div>
          <h1>Youtube Vid</h1>
        </div>
        <div>
          <Link to={{ pathname: YOUTUBE_URL }}>go Back !!!</Link>
        </div>
      </div>
    );
  }
}
