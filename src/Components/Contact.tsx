import React from "react";
import { PageContainer } from "../Shared/SharedStyles";
import HeaderNav from "./HeaderNav";


const Contact: React.FC = () => {
  return (
    <PageContainer>
        <HeaderNav stickyHeader />
        Contact
    </PageContainer>
  );
};

export default Contact;
