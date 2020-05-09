import React from 'react';
import styled from 'styled-components';
import house1 from '../house1.jpeg';
import logoWhite from '../logoWhite.svg';

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

const Home: React.FC = () => {
    return (
    <>
        <LandingSection>
            <MainLogo />
            <MainText>HOWARD HAVENS</MainText>
        </LandingSection>
        <Section>
          Test
        </Section>
    </>
    );
};

export default Home;