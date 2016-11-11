// @flow
import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Button from 'muicss/lib/react/button';

import styles from './thumb.css';
import Thumb from './thumb';

export default class YoutubeThumb extends Component {

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
        <Thumb title="Youtube">
        <div className={styles.container}>
          <div>
            <ul className={styles.list}>
              <li><h3>Last search :</h3></li>
              <li><blockquote>None</blockquote></li>
              <li><h3>Nb results : </h3></li>
              <li><blockquote>0</blockquote></li>
            </ul>
          </div>
          <Button size="small" color="primary" variant="fab"><i className="fa fa-paper-plane" /></Button>
        </div>
      </Thumb>
    );
  }
}
