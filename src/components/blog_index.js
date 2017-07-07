
import React from 'react';
import _ from 'lodash';


const BlogList =  ({blogs}) => {


  const list = _.map(blogs, blog => {
    return (
      <div key={blog.id} className="blog-card">
        <h2>{blog.title}</h2>
        <p>created: 11 May 2017 </p>
        <hr/>
        <p>{blog.body}</p>
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
