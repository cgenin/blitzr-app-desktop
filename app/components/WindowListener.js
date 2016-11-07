// @flow
import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';


export default class WindowListener extends Component {

  constructor(props) {
    super(props);
    this.__updateDimensions = this.__updateDimensions.bind(this);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  __updateDimensions() {
    const w = window,
      d = document,
      documentElement = d.documentElement,
      body = d.getElementsByTagName('body')[0],
      width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
      height = w.innerHeight || documentElement.clientHeight || body.clientHeight;
    this.props.resize({width, height});
  }

  componentWillMount() {
    this.__updateDimensions();
  }

  componentDidMount() {
    window.addEventListener("resize", this.__updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.__updateDimensions());
  }

  render() {
    return (
      <div style={{display: 'none'}}>
      </div>
    );
  }
};

