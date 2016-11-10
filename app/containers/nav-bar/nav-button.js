// @flow
import React, {Component, PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Button from 'muicss/lib/react/button';

import {history} from '../../env';

class GoButton extends Component {
  static propTypes = {
    route: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.__click = this.__click.bind(this);
  }

  __click() {
    history.push(this.props.route);
  }

  render() {
    return (
      <Button size="small" color="primary" onClick={this.__click}>{this.props.name}</Button>
    )
  }
}

class CurrentButton extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <Button size="small" color="accent" disabled={true}>{this.props.name}</Button>
    )
  }
}

export default class NavButton extends Component {
  static propTypes = {
    route: PropTypes.string.isRequired,
    go: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {

    if (this.props.go) {
      return (<GoButton route={this.props.route} name={this.props.name}/>);
    }
    return (<CurrentButton name={this.props.name}/>);
  }
}
