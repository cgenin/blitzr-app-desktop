// @flow
import React, {Component, PropTypes} from 'react';
import NavBar from './NavBar';


export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div>
        <NavBar location={this.props.location.pathname}/>
        {this.props.children}
      </div>
    );
  }
}
