import React from "react";
import HeaderNav from "./HeaderNav";
import { PageContainer } from "../Shared/SharedStyles";

const Error404: React.FC = () => {
  return (
    <PageContainer>
      <HeaderNav stickyHeader />
      <h1>404 - Page not found</h1>
      <p>{`Current URL: "${window.location.pathname}"`}</p>
    </PageContainer>
  );
};

export default Error404;
