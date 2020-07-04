import React from "react";
import styled from "styled-components";
import { Section } from "./Home";
import { colours } from "../Shared/SharedStyles";
import { useHistory } from "react-router-dom";

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

const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 70%;

  @media(max-width: 1100px) {
    width: 95%;
  }
`;

const Column = styled.div`
  width: 50%;
  padding: 0 20px;
  box-sizing: border-box;

  @media(max-width: 1100px) {
    width: 100%;
  }
`;

interface FormItemProps {
  doubleHeight?: boolean;
}

const FormItem = styled.input`
    width: 100%;
    height: 50px;
    background: ${colours.white};
    border: 0;
    border-radius: 10px;
    margin-bottom: 20px;
    box-sizing: border-box;
    padding: 0 20px;
`;

const MultiLineForm = styled.textarea`
  width: 100%;
  height: 120px;
  background: ${colours.white};
  border: 0;
  border-radius: 10px;
  margin-bottom: 20px;
  box-sizing: border-box;
  padding: 18px 20px 0;
  font-family: Arial, Helvetica, sans-serif;
`;

const SubmitButton = styled.input`
  width: 300px;
  height: 50px;
  border-radius: 30px;
  border: 3px solid #fff;
  background: transparent;
  letter-spacing: 6px;
  color: #fff;
  font-size: 20px;
  line-height: 44px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: ${colours.white};
    color: ${colours.orange};
  }
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${colours.white};
  margin: 7px 15px 0px;
`;

interface formProps {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  
  function handleSubmit(event: any) {
    event.preventDefault();
    const data = new FormData(event.target);
    
    let newObject: any = {};
    data.forEach((value, key) => {newObject[key] = value});
    
    //Not currently used - for future API integration
    let json = JSON.stringify(newObject);
    console.dir(json);

    window.open(
      `mailto:contact@howardhavens.co.uk
        ?subject=${newObject.subject}
        &body=%0D%0A
        Name: ${newObject.name}%0D%0A
        Email: ${newObject.email}%0D%0A
        Phone: ${newObject.phone}%0D%0A%0D%0A
        Subject: ${newObject.subject}%0D%0A
        Message: ${newObject.message}`, 
        '_blank'
    );
  }


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

          <FormContainer onSubmit={handleSubmit}>
            <Column>
              <FormItem placeholder="Name" name="name" />
              <FormItem placeholder="Email" name="email" />
              <FormItem placeholder="Phone (optional)" name="phone" />
            </Column>

            <Column>
              <FormItem placeholder="Subject" name="subject" />
              <MultiLineForm placeholder="Your Message" name="message"></MultiLineForm>
            </Column>
            <SubmitButton type="submit" value="SUBMIT" />
          </FormContainer>

        </Container>
    </Section>
  );
};

export default Contact;
