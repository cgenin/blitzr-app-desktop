// @flow
import React, {Component} from 'react';
import Panel from 'muicss/lib/react/panel';

import WindowListener from './WindowListener';


export default class Blitzr extends Component {

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    const screenHeight = this.props.screenHeight || 100;
    const height = screenHeight - 100;
    const screenWidth = this.props.screenWidth || 30;
    const width = screenWidth - 30;
    return (
      <div style={{padding: '5px'}}>
        <WindowListener resize={this.props.resize}/>
        <Panel >
          <webview src="http://blitzr.com/"
                   style={{display: 'inline-flex', height: height + 'px', width: width + 'px'}}></webview>
        </Panel>
      </div>
    );
  }
};
