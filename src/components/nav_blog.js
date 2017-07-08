import React, { Component } from 'react';

class NavBlog extends Component {

  render() {
    return (
      <nav id="mabloq-nav">
        <ul>
          <li>Home</li>
          <li>
            <ul className="mabloq-nav-dropdown">Blog
              <li>Code</li>
              <li>Design</li>
              <li>Misc</li>
            </ul>
          </li>
          <li>Portfolio</li>
          <li>About</li>
        </ul>
      </nav>
    );
  }

}

export default NavBlog;
