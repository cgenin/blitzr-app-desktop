// @flow
import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Panel from 'muicss/lib/react/panel';
import Divider from 'muicss/lib/react/divider';

import styles from './thumb.css';

export default class Thumb extends Component {

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <Panel className={styles.homeThumb} >
        <div className="mui--text-accent-secondary mui--text-display1">
          {this.props.title}
        </div>
        <Divider />
        {this.props.children}
      </Panel>
    );
  }
}