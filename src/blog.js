import React from 'react';
import { Link } from 'react-router-dom';

function Blog() {
  const blogPosts = [
    { id: 1, title: 'My First Blog Post', path: '/blog/post1' },
    // Add more blog posts as needed
  ];

  return (
    <div>
      <h1>My Blog</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <Link to={post.path}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;