import React from 'react';
import logoWhite from '../logoWhite.svg';
import styled from 'styled-components';
import { colours } from '../Shared/SharedStyles';

const HeaderNavContainer = styled.div`
    width: 100%;
    max-width: 1800px;
    height: 100px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    & > img {
        position: absolute;
        top: calc(100vh + 15px);
        left: 50px;
        height: 60px;
    }
`;

const HeaderButton = styled.button`
    height: 100%;
    background: transparent;
    color: ${colours.white};
    border: none;
    letter-spacing: 5px;
    text-indent: 5px;
    padding: 0 25px;
    cursor: pointer;
    
    &:hover {
        color: ${colours.orange};
    }

    &:last-child {
        margin-right: 50px;
    }
`;

const HeaderNav: React.FC = () => {
    return (
        <HeaderNavContainer>
            <img src={logoWhite} alt="Howard Havens Logo" />
            <HeaderButton>ABOUT US</HeaderButton>
            <HeaderButton>LETTINGS</HeaderButton>
            <HeaderButton>DEAL SOURCING</HeaderButton>
            <HeaderButton>OTHER SECTION</HeaderButton>
            <HeaderButton>CONTACT</HeaderButton>
        </HeaderNavContainer>
    );
}

export default HeaderNav;