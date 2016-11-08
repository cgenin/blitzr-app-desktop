// @flow
import  React, {Component, PropTypes} from 'react';
import styles from './YoutubeResults.css';

class YoutubeThumbnail extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  };

  render() {
    const {medium} = this.props.item.snippet.thumbnails;
    const {height, width} = medium;
    const style = {height, width};
    return (
      <div className={styles.item}>
        <img src={medium.url} style={style}/>
        <h3>{this.props.item.snippet.title}</h3>
      </div>
    );
  }
}


export default class YoutubeResults extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  };


  render() {
    const thumbnails = this.props.items.map((item)=> {
      return (<YoutubeThumbnail key={item.id.videoId} item={item}/>)
    });
    return (
      <div className={styles.wrap}>
        <div className={styles.vidsresults} >
          {thumbnails}
        </div>
      </div>

    );
  }
}