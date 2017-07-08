import React, { Component } from 'react';
import Link from "react-router-dom";
class Nav extends Component {

  render() {
    return (
      <nav id="mabloq-nav">
        <ul>
          <li>Home</li>
          <li>Blog</li>
          <li>Portfolio</li>
          <li>About</li>
        </ul>
      </nav>
    );
  }

}

export default Nav;
