import React, { Component } from 'react';
import Nav from '../components/nav_hero';
// import Blog from '../components/blog_item';


class HomePage extends Component {

  render() {
    return (
      <div id="hero">
        <Nav />
        <h1 className="hero-title">Mabloq</h1>
      </div>
    );
  }

}

export default HomePage;
