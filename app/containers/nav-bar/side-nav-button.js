// @flow
import React, {Component, PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Button from 'muicss/lib/react/button';

import {history} from '../../env';

class SideNavBtn extends Component {
  static propTypes = {
    route: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.__click = this.__click.bind(this);
  }

  __click() {
    this.props.onClose();
    history.push(this.props.route);
  }

  render() {
    return (
      <Button onClick={this.__click}>
        <i className="fa fa-circle-o fa-2x" />&nbsp;<span className="fa-2x">{this.props.name}</span>
      </Button>
    );
  }
}

class SideNavCurrentBtn extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <Button disabled={true}>
        <i className="fa fa-check-circle fa-2x" />
        &nbsp;<span className="fa-2x">{this.props.name}</span>
      </Button>
    );
  }
}

export default class SideNavButton extends Component {
  static propTypes = {
    route: PropTypes.string.isRequired,
    go: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    if (this.props.go) {
      return (
        <li><SideNavBtn onClose={this.props.onClose} route={this.props.route} name={this.props.name}/></li>
      );
    }
    return (
      <li><SideNavCurrentBtn name={this.props.name}/></li>
    );
  }
}