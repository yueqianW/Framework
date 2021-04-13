import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          cid: 1,
          title: '111'
        },
        {
          cid: 2,
          title: '222'
        },
        {
          cid: 3,
          title: '333'
        }
      ]
    };
    this.props.history.push('/home/');
  }

  render() {
    const { list } = this.state;
    return (
      <div>
        {/* <Redirect to="/home/"></Redirect> */}
        <ul>
          {list.map((item, index) => {
            return (
              <li key={item.cid}>
                <Link to={'/list/' + item.cid}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Index;
