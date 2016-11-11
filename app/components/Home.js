// @flow
import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import YoutubeThumb from './home/youtube-thumb';
import styles from './Home.css';



export default class Home extends Component {

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (

      <div className={styles.container}>
        <div className={styles.title}>
          <h2>Home</h2>
        </div>
        <YoutubeThumb/>
      </div>
    );
  }
}
