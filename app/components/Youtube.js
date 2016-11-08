// @flow
import React, {Component} from 'react';
import Panel from 'muicss/lib/react/panel';
import YoutubeForm from './youtube/YoutubeForm';


export default class Youtube extends Component {
  render() {
    console.log(this.props)
    return (
      <div style={{padding: '5px'}}>
        <Panel>
          <YoutubeForm q={this.props.q} onSearch={this.props.search}/>
        </Panel>
      </div>
    );
  }
};
