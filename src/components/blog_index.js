import React from 'react';
import _ from 'lodash';


const BlogList =  ({blogs}) => {


  const list = _.map(blogs, blog => {
    return (
      <div key={blog.id} className="blog-card">
        <h2>{blog.title}</h2>
        <p className="italics">created: 11 May 2017</p>
        <p>{blog.body} ...</p>
        <hr/>
				<a href="#" className="read-more">Read More</a>
				<a href="#" className="pull-right read-more"> Comments</a>
      </div>
    );
  });

  return (
    <div>
      {list}
    </div>
  );

};

export default BlogList;
