import React from 'react';
import { withRouter } from "next/router";

const A = ({ router }) => {
  return (
    <div>111 {router.query.name}</div>
  )
}
export default withRouter(A)
