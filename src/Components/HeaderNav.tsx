import React from 'react';
import logoWhite from '../logoWhite.svg';
import styled from 'styled-components';
import { colours } from '../Shared/SharedStyles';

const HeaderNavContainer = styled.div`
    width: 100%;
    max-width: 1800px;
    margin: auto;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > img {
        height: 60px;
        margin-left: 50px;
    }
`;


const HeaderButton = styled.button`
    height: 100%;
    background: transparent;
    color: ${colours.white};
    border: none;
    letter-spacing: 5px;
    text-indent: 5px;
    padding: 30px 25px;
    cursor: pointer;
    
    &:hover {
        color: ${colours.orange};
    }

    &:last-child {
        margin-right: 50px;
    }
`;

const NavItemsRightContainer = styled.div`
    display: flex;
    justify-content: center;

    @media( max-width: 1100px ) {
        flex-direction: column;
        align-self: flex-start;

        ${HeaderButton} {
            background: red;
            margin-right: 20px;
        }
    }
`;


const HeaderNav: React.FC = () => {
    return (
        <HeaderNavContainer>
            <img src={logoWhite} alt="Howard Havens Logo" />
            <NavItemsRightContainer>
                <HeaderButton>ABOUT US</HeaderButton>
                <HeaderButton>LETTINGS</HeaderButton>
                <HeaderButton>DEAL SOURCING</HeaderButton>
                <HeaderButton>OTHER SECTION</HeaderButton>
                <HeaderButton>CONTACT</HeaderButton>
            </NavItemsRightContainer>
        </HeaderNavContainer>
    );
}

export default HeaderNav;