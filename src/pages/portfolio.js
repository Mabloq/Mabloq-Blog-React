import React, { Component } from 'react';
import waffle from '../images/wafffle2.jpg';
import Nav from '../components/nav_hero';
class Portfolio extends Component {

  render() {
    return (
      <div>
        <div className="blog-nav">
          <Nav />
        </div>
        <div className="container">
          <div className="grid">
            <div className="cell">
              <img className="responsive-img" src={waffle} alt="waffle"/>
              <p className="cell-desc">YOOO YOOOO</p>
            </div>
            <div className="cell">
              <img className="responsive-img" src={waffle} alt="waffle"/>
              <p className="cell-desc">YOOO YOOOO</p>
            </div>
            <div className="cell">
              <img className="responsive-img" src={waffle} alt="waffle"/>
              <p className="cell-desc">YOOO YOOOO</p>
            </div>
            <div className="cell">
              <img className="responsive-img" src={waffle} alt="waffle"/>
              <p className="cell-desc">YOOO YOOOO</p>
            </div>
            <div className="cell">
              <img className="responsive-img" src={waffle} alt="waffle"/>
              <p className="cell-desc">YOOO YOOOO</p>
            </div>
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
