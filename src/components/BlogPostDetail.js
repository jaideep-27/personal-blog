import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../styles/BlogPostDetail.css";

function BlogPostDetail() {
  const { id } = useParams(); // Use the id from the URL
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/posts/${id}`)
      .then(response => response.json())
      .then(data => setPost(data))
      .catch(error => console.error("Error fetching post:", error));
  }, [id]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default BlogPostDetail;
