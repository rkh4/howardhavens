import React from "react";
import { PageContainer } from "../Shared/SharedStyles";
import HeaderNav from "./HeaderNav";


const Lettings: React.FC = () => {
  return (
    <PageContainer>
        <HeaderNav stickyHeader />
        Lettings
    </PageContainer>
  );
};

export default Lettings;
