import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/login">Go back to Login</Link> {/* Or to any other valid route */}
    </div>
  );
};

export default NotFound;
