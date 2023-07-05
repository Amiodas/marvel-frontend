import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css"

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="space-y-6 text-center">
        <h1 className="text-8xl font-bold text drop-shadow-lg">Oops!</h1>
        <h1 className="text-2xl">404 Page Not Found</h1>
        <div className="flex justify-center">
        <p className="w-1/2">
          The Page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
        </div>
        <div>
          <Link to="/">
            <button className="btn btn-primary rounded-3xl px-10">
              Go To Homepage
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
