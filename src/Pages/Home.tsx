import React from 'react';
import styled, { keyframes } from 'styled-components';
import house1 from '../house1.jpeg';
import logoWhite from '../logoWhite.svg';
import scrollComponent from '../scrollComponent.svg';
import HeaderBar from '../Shared/HeaderBar';

interface sectionProps {
    dark?: boolean;
}

const Section = styled.div`
    height: 100vh;
    background: ${(p: sectionProps) => p.dark ? "#000" : "initial"};
    color: ${(p: sectionProps) => p.dark ? "#fff" : "initial"};
`;

const LandingSection = styled(Section)`
    background-image: url(${house1});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: calc(100% + 42px);
    background-position-x: center;

    @media(max-width: 1200px) {
        background-position-y: initial;
    }

    & filter {
        content: '';
        position: absolute;
        background: #6A6A6A;
        opacity: 0.45;
        top: 0;
        right: 0;
        left: 0;
        height: 100vh;
    }
`;


const MainText = styled.div`
    color: white;
    font-family: 'Montserrat';  
    font-weight: 200;
    position: absolute;
    font-size: 8vw;
    letter-spacing: 20px;
    text-align: center;
    top: 10%;
    width: 100%;
    line-height: 110px;

    @media(max-width: 900px) {
        font-weight: 300;
        font-size: 11vw;
        line-height: 120px;
    }
`;

const MainLogo = styled.div`
    background-image: url(${logoWhite});
    background-size: 100%;
    background-position-y: center;
    background-repeat: no-repeat;
    width: 30%;
    height: 50%;
    position: absolute;
    top: 34%;
    left: 37.8%;

    @media(max-width: 900px) {
        width: 50%;
        height:50%;
        top: 36%;
        left: 30%;
    }
`;

const bounce = keyframes`
    0% { transform: translate(0,0); }
    25% { transform: translate(0, -25px); }
    50% { transform: translate(0,0); }
`;

const ScrollArrow = styled.a`
    background-image: url(${scrollComponent});
    background-size: 100%;
    background-position-y: center;
    background-repeat: no-repeat;
    width: 80px;
    height: 100px;
    position: absolute;
    bottom: 10px;
    left: calc(50% - 40px);
    animation: ${bounce} 1s infinite;
`;

const Home: React.FC = () => {
    return (
    <>
        <LandingSection>
            <filter />
            <MainLogo />
            <MainText>HOWARD HAVENS</MainText>
            <ScrollArrow href="#intro"/>
        </LandingSection>
        <Section dark id="intro">
          <HeaderBar />
        </Section>
    </>
    );
};

export default Home;