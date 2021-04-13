import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.setState({
      id: this.props.match.params.id
    });
  }
  render() {
    const { id } = this.state;
    return <div>2222-{id}</div>;
  }
}

export default List;
