// @flow
import React, {Component} from 'react';
import Panel from 'muicss/lib/react/panel';

import YoutubeForm from './youtube/YoutubeForm';
import YoutubeResults from './youtube/YoutubeResults';


export default class Youtube extends Component {
  render() {
    const gotoVid = (item)=> {
      const index = this.props.items.findIndex(i => i === item);
      if (index) {
        this.props.router.push(`/youtube/vid/${index}`);
      }
    };
    return (
      <div style={{padding: '5px'}}>
        <Panel>
          <YoutubeForm q={this.props.q} onSearch={this.props.search}/>
        </Panel>
        <YoutubeResults items={this.props.items} onSelect={gotoVid}/>
      </div>
    );
  }
};
