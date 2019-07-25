import React from 'react';
import {Link} from 'react-router-dom';
const NotFound =()=>(
  <div>
  404! - <Link to = "/"> Go Home</Link>
  </div>
);//link is client side routing it will change the js displayed not communicate the server to geet the new page

export default NotFound;
