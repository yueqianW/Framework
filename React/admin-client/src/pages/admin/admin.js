import React, { Component, } from 'react';
import memoryUtils from "../../utils/memoryUtils";
import { Redirect } from 'react-router-dom';

class Admin extends Component {

  render() {
    const user = memoryUtils.user
    if (!user || !user._id) {
      return <Redirect to='/login' />
    }

    return (
      <div>Admin</div>
    )
  }
}

export default Admin