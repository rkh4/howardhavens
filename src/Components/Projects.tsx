import React from "react";
import { PageContainer } from "../Shared/SharedStyles";
import HeaderNav from "./HeaderNav";


const Projects: React.FC = () => {
  return (
    <PageContainer>
        <HeaderNav stickyHeader />
        Projects
    </PageContainer>
  );
};

export default Projects;
