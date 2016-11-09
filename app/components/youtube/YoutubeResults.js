// @flow
import  React, {Component, PropTypes} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Button from 'muicss/lib/react/button';

import styles from './YoutubeResults.css';

const styleImg = {height: '180px', width: '320px'};

class YoutubeThumbnail extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.__click = this.__click.bind(this);
  }

  __click() {
    this.props.onSelect(this.props.item);
  }

  render() {
    const {medium} = this.props.item.snippet.thumbnails;
    return (
      <div className={styles.item} onClick={this.__click}>
        <Button className={styles.playbutton} size="small" variant="fab"><i className="fa fa-play"></i></Button>
        <img src={medium.url} style={styleImg}/>
        <h3>{this.props.item.snippet.title}</h3>
      </div>
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
    const thumbnails = this.props.items.map((item)=> {
      return (<YoutubeThumbnail key={item.id.videoId} item={item} onSelect={onSelect}/>)
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