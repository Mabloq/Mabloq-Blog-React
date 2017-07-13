import React, { Component } from 'react';
import waffle from '../images/wafffle2.jpg';
import profileImg from '../images/profilepic.jpg';
import Nav from '../components/nav_hero';


class Home extends Component {

  render() {
    return (
      <div>
        <div className="home">  =<Nav /></div>

        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <img src={waffle} alt="waffle" className="home-img" />
            </div>
            <div className="col-md-4">
              <div className="about-me">
                <img src={profileImg} alt="waffle" className="profile-img" />
                <h2>About Me</h2>
                <hr/>
                <p>Pug fanny pack cold-pressed, sustainable schlitz roof party ugh affogato readymade selvage woke direct trade. Twee literally cliche woke, hot chicken photo booth hammock. Green juice chia selfies quinoa glossier. Vegan meggings +1, man braid keffiyeh gochujang hell of ramps succulents live-edge ennui celiac. Vinyl vexillologist swag yr organic authentic artisan. Intelligentsia scenester poutine, squid fanny pack shoreditch mustache austin adaptogen. Vape letterpress godard shoreditch fanny pack, cornhole thundercats chillwave gastropub next level cold-pressed lyft hella meggings. Banh mi hella next level, lomo occupy sriracha bitters palo santo lyft. Cornhole iceland quinoa yuccie lomo pitchfork hexagon 8-bit cray truffaut. Selfies banh mi sustainable migas everyday carry, meditation salvia skateboard letterpress hoodie pitchfork. Lyft master cleanse umami swag whatever.
Mumblecore pop-up hammock craft beer, waistcoat neutra lomo a</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Home;
