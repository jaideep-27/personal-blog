import React from "react";
import ReactDOM from "react-dom/client";  // Use the new "react-dom/client" import for React 18
import './index.css';  // Optional: for global styles
import App from './App';  // Import the App component
import reportWebVitals from './reportWebVitals';  // Optional for measuring performance

// Create a root element and render the App component
const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: report web vitals
reportWebVitals();
