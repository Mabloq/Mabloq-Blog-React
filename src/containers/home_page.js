import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';
import {bindActionCreators} from 'redux';

import Nav from '../components/nav_hero';
import Blog from '../components/blog_index';
import Pagination from '../components/pagination';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
            pageOfItems: {}
        };
    this.onChangePage = this.onChangePage.bind(this);
  }
  componentWillMount() {
      this.props.fetchPosts();
  }

  onChangePage(pageOfItems) {
    // update state with new page of items
       this.setState({ pageOfItems: pageOfItems });
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
              <Blog blogs={this.state.pageOfItems}/>
              <Pagination items={this.props.blogs} onChangePage={this.onChangePage}/>
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
