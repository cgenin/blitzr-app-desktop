// @flow
import React, {Component, PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Swipeable from 'react-swipeable';

import styles from './side-nav-bar.css';
import {routesBar} from '../../env';
import SideNavButton from './side-nav-button';

export default class SideNavBar extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    location: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    const {location, onClose} = this.props;
    const routesButtons = routesBar.map((r, k) => {
      const go = location !== r.path;
      return (<SideNavButton key={k} onClose={onClose} route={r.path} go={go} name={r.name}/>);
    });
    return (
      <ReactCSSTransitionGroup
        transitionName="aside-transition"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeaveTimeout={500}>
        <Swipeable onSwipingLeft={()=>this.props.onClose()}>
          <aside className={styles.sidenav} onClick={this.props.onClose}>
            <nav className={styles.sidenav__container} onClick={(evt)=>evt.stopPropagation()}>
              <a className={styles.sidenav__hide} onClick={this.props.onClose}><i className="fa fa-close fa-2x"/></a>
              <header className={styles.sidenav__header}>
                Music.desk
              </header>
              <ul>
                {routesButtons}
              </ul>
            </nav>
          </aside>
        </Swipeable>
      </ReactCSSTransitionGroup>
    );
  }
}