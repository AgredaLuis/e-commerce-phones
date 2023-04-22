import React from "react";
import { useLocation } from "react-router-dom";

const NotFound = (value) => {
  const location = useLocation();

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
          <h2>404 error</h2>
          <h1 className="display-3">Page Not Found</h1>
          <p>The requested page"<span className="text-danger">{location.pathname}</span>" was not found.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
