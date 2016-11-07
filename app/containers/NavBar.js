// @flow
import React, {Component, PropTypes} from 'react';
import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';

import {routesBar, history} from '../env';

class GoButton extends Component {
  static propTypes = {
    location: PropTypes.element.isRequired,
    name: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.__click = this.__click.bind(this);
  }

  __click() {
    history.push(this.props.location);
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

  render() {
    return (
      <Button size="small" color="accent" disabled={true}>{this.props.name}</Button>
    )
  }
}

class NavButton extends Component {
  static propTypes = {
    location: PropTypes.element.isRequired,
    go: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
  };

  render() {
    if (this.props.go) {
      return (<GoButton location={this.props.location} name={this.props.name}/>);
    } else {
      return (<CurrentButton name={this.props.name}/>);
    }
  }
}


export default class NavBar extends Component {
  render() {
    const {location} = this.props;
    const routesButtons = routesBar.map((r,k) => {
      const go = location !== r.path;
      return (<NavButton key={k} location={r.path} go={go} name={r.name}/>);
    });

    return (
      <Appbar >
        <div style={{display: 'flex', justifyContent: 'space-between', paddingLeft: '3px'}}>
          <div><h1 style={{margin: '10px'}}>Music.desk</h1></div>
          <div style={{margin: '10px'}}>
            {routesButtons}
          </div>
        </div>
      </Appbar>);
  }
}
