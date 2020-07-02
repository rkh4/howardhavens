import React from "react";
import styled from "styled-components";
import { Section } from "./Home";
import { colours } from "../Shared/SharedStyles";

const Container = styled.div`
  background: ${colours.orange};
`;

const Contact: React.FC = () => {
  return (
    <Section background={colours.orange}>
        <Container>
          Contact
        </Container>
    </Section>
  );
};

export default Contact;
