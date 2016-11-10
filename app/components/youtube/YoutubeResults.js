// @flow
import  React, {Component, PropTypes} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Button from 'muicss/lib/react/button';
import {Link} from 'react-router';

import styles from './YoutubeResults.css';
import {YOUTUBE_VID_URL} from '../../env';

const styleImg = {height: '180px', width: '320px'};

class YoutubeThumbnail extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);
  }


  render() {
    const {medium} = this.props.item.snippet.thumbnails;
    return (
      <Link to={{ pathname: `${YOUTUBE_VID_URL}${this.props.index}` } }>
        <div className={styles.item}>
          <Button className={styles.playbutton} size="small" variant="fab"><i className="fa fa-play"></i></Button>
          <img src={medium.url} style={styleImg}/>
          <h3>{this.props.item.snippet.title}</h3>
        </div>
      </Link>
    );
  }
}


export default class YoutubeResults extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired
  };


  render() {
    const onSelect = this.props.onSelect;
    const thumbnails = this.props.items.map((item, index)=> {
      const key = `${index}-${item.id.videoId}`;
      return (<YoutubeThumbnail key={key} index={index} item={item} onSelect={onSelect}/>)
    });
    return (
      <div className={styles.wrap}>
        <div className={styles.vidsresults}>

          {thumbnails}
        </div>
      </div>

    );
  }
}
