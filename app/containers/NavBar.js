// @flow
import React, {Component, PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';

import styles from './NavBar.css';
import NavButton from './nav-bar/nav-button';
import SideNavBar from './nav-bar/side-nav-bar';
import {routesBar} from '../env';

class CloseButton extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  };

  constructor(props){
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }


  render() {
    return (
      <Button onClick={this.props.onClick}>
        <i className="fa fa-bars fa-2x" aria-hidden="true"/>
      </Button>);
  }
}


export default class NavBar extends Component {

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.___onHideOrClose = this.___onHideOrClose.bind(this);
    this.state = {
      sidebar: false
    };
  }

  ___onHideOrClose() {
    const sidebar = !this.state.sidebar;
    this.setState({sidebar});
  }

  render() {
    const {location} = this.props;
    const ___onHideOrClose = this.___onHideOrClose;
    const routesButtons = routesBar.map((r, k) => {
      const go = location !== r.path;
      return (<NavButton key={k} route={r.path} go={go} name={r.name}/>);
    });
    const sidebar = (this.state.sidebar) ? (<SideNavBar location={location} onClose={___onHideOrClose}/>) : (<div/>);
    return (
      <Appbar >
        <div className={styles.container}>
          <div><h1>Music.desk</h1></div>
          <div className={styles.container__right}>
            {routesButtons}
          </div>
          <div className={styles.container__sidenavbutton}><CloseButton onClick={___onHideOrClose}/></div>
        </div>
        {sidebar}
      </Appbar>);
  }
}
