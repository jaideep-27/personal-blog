import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar"; // Make sure you create a Navbar component
import BlogPostList from "./components/BlogPostList"; // Component to display the list of blog posts
import BlogPostForm from "./components/BlogPostForm"; // Component for creating new posts
import BlogPostDetail from "./components/BlogPostDetail"; // Component to view a single blog post

function App() {
  return (
    <Router>
      {/* Navigation bar */}
      <Navbar />
      
      <div className="container">
        <Routes>
          {/* Home route: Display the list of blog posts */}
          <Route path="/" element={<BlogPostList />} />

          {/* Create post route: Form to create new blog posts */}
          <Route path="/create" element={<BlogPostForm />} />

          {/* Single post view route: Display details of a specific blog post */}
          <Route path="/post/:id" element={<BlogPostDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
