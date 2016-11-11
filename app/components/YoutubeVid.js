// @flow
import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Button from 'muicss/lib/react/button';
import {Link} from 'react-router';

import  {YOUTUBE_URL} from '../env';
import styles from './YoutubeVid.css';

export default class YoutubeVid extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      current: {}
    }
  }

  componentDidMount() {
    if (this.props.params && this.props.params.index) {
      const index = parseInt(this.props.params.index);
      const current = this.props.items[index];
      this.setState({current, index});
    }
  }


  render() {
    if (!this.state.current) {
      return (
        <div>
          <div>
            <h1>No Youtube Vid Found</h1>
          </div>
          <div>
            <Link to={{ pathname: YOUTUBE_URL }}>go Back !!!</Link>
          </div>
        </div>
      );
    }

    const url = `https://www.youtube.com/watch?v=${this.state.current.id.videoId}`;
    return (
      <div>
        <div className={styles.title}>
          <h3><i className="fa fa-youtube fa-2x"/> - {this.state.current.snippet.title}</h3>
        </div>
        <div className={styles.buttons}>
          <Link to={{ pathname: YOUTUBE_URL }}>
            <Button size="small" color="secondary" variant="fab">
              <i className="fa-chevron-circle-left fa fa-2x"/>
            </Button>
          </Link>
        </div>
        <div className={styles.vid}>
          <webview src={url} className={styles.webview}/>
        </div>
      </div>
    );

  }
}
