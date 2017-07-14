import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPosts, paginate} from '../actions';
import {bindActionCreators} from 'redux';

import Nav from '../components/nav_hero';
import Blog from '../components/blog_index';
import Pagination from '../components/pagination';
import BlogSide from '../components/blog_sidebar';
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
        <div className="blog-nav">
          <Nav />
        </div>
        <div className="container page-top">
          <div className="row">
            <div className="col-md-8">
              <h2>Recent Posts</h2>
              <hr/>
              <Blog blogs={this.state.pageOfItems}/>
              <Pagination items={this.props.blogs} onChangePage={this.onChangePage}/>
            </div>
            <div className="col-md-3 col-md-offset-1">
              <h2>Categories</h2>
            <hr />
              <BlogSide />
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
  return bindActionCreators({fetchPosts: fetchPosts, paginate: paginate}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
