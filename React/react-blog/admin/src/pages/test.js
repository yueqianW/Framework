import React, { Component } from 'react';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ''
    };
  }

  componentDidMount() {
    let test = this.props.match.params.id;
    this.setState({ id: test });
  }

  render() {
    const { id } = this.state;
    return <div>{id}</div>;
  }
}

export default Test;
