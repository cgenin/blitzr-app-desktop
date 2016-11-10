// @flow
import React, {Component} from 'react';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';


export default class YoutubeForm extends Component {
  constructor(props) {
    super(props);
    this.__onSubmit = this.__onSubmit.bind(this);
    this.__onChange = this.__onChange.bind(this);
    this.state = {
      q: ''
    }
  }

  __onChange(evt) {
    const q = evt.target.value;
    this.setState({q});
  }

  __onSubmit(evt) {
    if (evt) {
      evt.preventDefault();
    }
    this.props.onSearch(this.state.q);
    return false;
  }

  componentWillReceiveProps(nextProps) {
    const {q} = nextProps;
    if (q && q !== this.state.q) {
      this.setState({q})
    }
  }

  render() {
    const {q} = this.props;
    console.log(q);
    const label = (!!q) ? `last search : ${q}` : 'Search ...';
    return (
      <Container fluid={true}>

        <Form onSubmit={this.__onSubmit}>
          <Row>
            <Col sm="9" xs="12"><Input label={label} onChange={this.__onChange} defaultValue={q}
                                       style={{width: '100%'}}/></Col>
            <Col sm="3" xs="12"><Button color="primary">Submit</Button></Col>
          </Row>


        </Form>
      </Container>

    );
  }
};
