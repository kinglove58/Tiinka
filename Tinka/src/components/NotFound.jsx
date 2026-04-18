import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Tinka Health Services</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg mb-8">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link to="/" className="text-blue-500 hover:underline">
          Go back to Home
        </Link>
      </div>
    </>
  );
}

export default NotFound;
