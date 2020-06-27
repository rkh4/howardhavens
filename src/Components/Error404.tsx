import React from "react";

const Error404: React.FC = () => {
  return (
    <>
      <h1>404 - Page not found</h1>
      <p>{`Current URL: "${window.location.pathname}"`}</p>
    </>
  );
};

export default Error404;
