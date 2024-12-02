import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../styles/BlogPostList.css";

function BlogPostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content.substring(0, 100)}...</p>
              <Link to={`/post/${post.id}`}>Read more</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BlogPostList;
