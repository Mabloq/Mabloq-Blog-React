import React, { Component } from 'react';
import waffle from '../images/wafffle2.jpg';
import profileImg from '../images/profilepic.jpg';
import Nav from '../components/nav_hero';


class Home extends Component {

  render() {
    return (
      <div>
        <div className="home">
          <Nav />
        </div>

        <div className="container page-top">
          <div className="row">
            <div className="col-md-8">
              <img src={waffle} alt="waffle" className="home-img" />
            </div>
            <div className="col-md-4">
              <div className="about-me">
                <div className="img-container">
                  <img src={profileImg} alt="waffle" className="profile-img" />

                </div>
                <h2>Matthew Arcila</h2>
                <p><strong>Front End Developer / Designer</strong></p>
                <hr/>
                <p>Hey, I'm 23 living in the NYC area, When Im not hacking things together with the latest toys and frameworks. Im exploring asian food, running
                with BAE, watching Westworld, or contributing to the NYC Developer community by hanging out at code meetups.
                </p>
                <p>But mostly I'm just eating pizza.</p>
                <h3>Front End Skills</h3>
                <p>Javascript (ES6), React / Redux, Jquery</p>
                <p>HTML5, CSS3, SVG Animations</p>
                <p>API design /consumption, SPA / MVC web architerctures </p>
                <h3>Design Skills</h3>
                <p>Photoshop, Illustrator, Icon Design, UX </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Home;
