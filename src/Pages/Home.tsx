import React from 'react';
import styled from 'styled-components';
import house1 from '../house1.jpeg';
import logoWhite from '../logoWhite.svg';
import downArrow from '../downArrow.svg';

const Section = styled.div`
    height: 100vh;
    width: 100vw;
`;

const LandingSection = styled(Section)`
    background-image: url(${house1});
    background-repeat: no-repeat;
    background-size: auto 100%;
`;

const MainLogo = styled.div`
    background-image: url(${logoWhite});
    background-size: 100%;
    background-position-y: center;
    background-repeat: no-repeat;
    width: 24%;
    height: 30%;
    position: absolute;
    top: 26%;
    left: 20%;
`;

const MainText = styled.div`
    color: white;
    position: absolute;
    font-size: 10vw;
    text-align: center;
    top: 58%;
    width: 100%;
`;

const DownArrow = styled.a`
    background-image: url(${downArrow});
    background-size: 100%;
    background-position-y: center;
    background-repeat: no-repeat;
    width: 4%;
    height: 10%;
    position: absolute;
    bottom: 5px;
    left: 48%;

    &:hover {
        transition: all 0.3s ease;
        /* transform: translate(0, -10px) scale(1.1); */
    }
`;

const Home: React.FC = () => {
    return (
    <>
        <LandingSection>
            <MainLogo />
            <MainText>HOWARD HAVENS</MainText>
            <DownArrow href="#section2"/>
        </LandingSection>
        <Section id="section2">
          Test
        </Section>
    </>
    );
};

export default Home;