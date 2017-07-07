import React, { Component } from 'react';

class Nav extends Component {

  render() {
    return (
      <nav id="mabloq-nav">
        <ul>
          <li>Home</li>
          <li> Blog
            <ul className="mabloq-nav-dropdown">
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

export default Nav;
