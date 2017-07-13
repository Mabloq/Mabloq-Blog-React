import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Nav extends Component {

  render() {
    return (
      <nav id="mabloq-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li>About</li>
        </ul>
      </nav>
    );
  }

}

export default Nav;
