import React, { Component } from 'react';
import waffle from '../images/wafffle2.jpg';
import Nav from '../components/nav_hero';
class Portfolio extends Component {

  render() {
    return (
      <div>
        <div id="hero">
          <Nav />
          <h2 className="hero-title">Portfolio</h2>
        </div>
        <div className="container">
          <div className="grid">
            <div className="cell">
              <img className="responsive-img" src={waffle} alt="waffle"/>
              <p className="cell-desc">YOOO YOOOO</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Portfolio;
