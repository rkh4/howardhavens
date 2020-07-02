import React from "react";
import styled from "styled-components";
import { Section } from "./Home";
import { colours } from "../Shared/SharedStyles";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 100;
  font-size: 1.6em;
`;

const MainHeader = styled.h1`
  text-transform: uppercase;
  letter-spacing: 7px;
  font-weight: 400;
`;

const SubHeader = styled.div`
  max-width: 1000px;
`;

const LinksContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  justify-content: space-between;
`;

const Link = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${colours.white};
  margin: 7px 15px 0px;
`;

const Contact: React.FC = () => {
  return (
    <Section background={colours.orange}>
        <Container>
          <MainHeader>Contact Us</MainHeader>
          <SubHeader>Please get in touch today if you have any questions, are interested in any of our services - or are looking for hassle free solutions to your property needs!</SubHeader>

          <LinksContainer>
            <Link>
              <Icon></Icon>
              Lettings@howardhavens.co.uk
            </Link>
            <Link>
              <Icon></Icon>
              Projects@howardhavens.co.uk
            </Link>
            <Link>
              <Icon></Icon>
              Sourcing@howardhavens.co.uk
            </Link>
            <Link>
              <Icon></Icon>
              Contact@howardhavens.co.uk
            </Link>
          </LinksContainer>
        </Container>
    </Section>
  );
};

export default Contact;
