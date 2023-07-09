import React from "react";

const Blog = () => {
  return (
    <div className="mt-6 mb-16">
      <h3 className="text-xl font-bold"># Blogs</h3>
      <div className="mt-5">
        <h3>
          1. What is an access token and refresh token? How do they work and
          where should we store them on the client side?
        </h3>
        <p className="mt-1">
          Answer: 
          <p>
            <span className="badge badge-secondary">Access token</span>:
            A refresh token is a credential that is also obtained during the
            authentication process, usually along with the access token. Unlike
            the access token, the refresh token has a longer expiration time and
            is used to obtain a new access token when the current one expires.
            When the access token expires, the client application can use the
            refresh token to request a new access token from the server without
            requiring the user to re-enter their credentials. This process is
            known as token refreshing or token rotation.
          </p>
          <p className="mt-5">
          <span className="badge badge-secondary">Refresh token</span>:
            A refresh token is a credential that is also obtained during the
            authentication process, usually along with the access token. Unlike
            the access token, the refresh token has a longer expiration time and
            is used to obtain a new access token when the current one expires.
            When the access token expires, the client application can use the
            refresh token to request a new access token from the server without
            requiring the user to re-enter their credentials. This process is
            known as token refreshing or token rotation.
          </p>
        </p>
      </div>
    </div>
  );
};

export default Blog;
