import React, { Component } from 'react';
import { Outlet, Link } from 'react-router-dom';

export default class Layout extends Component {
  render() {
    return (
        <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/categories">Categories</Link></li>
            <li><Link to="/orders">Orders</Link></li>
          </ul>
        </nav>
        <hr />
        <Outlet />
      </div>
    )
  }
}
