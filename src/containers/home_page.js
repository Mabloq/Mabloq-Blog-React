import React, { Component } from 'react';
import Nav from '../components/nav_hero';
import Blog from '../components/blog_index';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';
import {bindActionCreators} from 'redux';

class HomePage extends Component {
  componentDidMount() {
      this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <div id="hero">
          <Nav />
          <h2 className="hero-title">Mabloq</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2>Recent Posts</h2>
              <hr/>
              <Blog blogs={this.props.blogs}/>
            </div>
            <div className="col-md-3 col-md-offset-1">
              <h2>Categories</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    blogs: state.blogs
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchPosts: fetchPosts}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
