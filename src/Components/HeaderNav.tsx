import React, { useState } from 'react';
import logoWhite from '../logoWhite.svg';
import styled from 'styled-components';
import { colours } from '../Shared/SharedStyles';

interface menuProps {
    menuOpen? : boolean;
}

const HeaderNavContainer = styled.div`
    width: 100%;
    max-width: 1800px;
    margin: auto;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

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
    padding: 42px 25px;
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
    overflow: hidden;
    transition: all 0.3s ease;

    @media( max-width: 1100px ) {
        flex-direction: column;
        align-self: flex-start;
        margin-top: 100px;
        transition: all 0.3s ease;
        height: ${(p:menuProps) => p.menuOpen ? "400px" : "0"};

        ${HeaderButton} {
            display: initial;
            margin-right: 20px;
            text-align: right;
            border-radius: 0;
            background: #1f1f1f;
            padding: 0 25px;
        }
    }
`;

const Burger = styled.div`
    height: 5px;
    width: 40px;
    background: ${(p: menuProps) => p.menuOpen ? colours.orange : "#fff"};
    transition: all 0.5s ease;
    transition-property: height, width, transform;
    position: absolute;
    top: calc(50% - 12.5px);
    left: calc(50% - 20px);
    transform: ${(p: menuProps) => p.menuOpen ? "translateY(10px) rotate(45deg)" : ""};

    &:before, &:after {
        content: '';
        position: absolute;
        height: 5px;
        width: 40px;
        background: ${(p: menuProps) => p.menuOpen ? colours.orange : "inherit"};
        transition: transform 0.5s ease, opacity 0.5s ease;
    }

    &:before {
        margin-top: 10px;
        transform: ${(p: menuProps) => p.menuOpen ? "translateY(-10px) rotate(180deg)" : ""};
        opacity: ${(p: menuProps) => p.menuOpen ? "0" : "1"};
    }

    &:after {
        margin-top: 20px;
        transform: ${(p: menuProps) => p.menuOpen ? "translateY(-20px) rotate(-90deg)" : ""};
    }
`;


const BurgerContainer = styled.div`
    height: 100px;
    width: 100px;
    background: ${(p: menuProps) => p.menuOpen ? "#1f1f1f" : "transparent"};
    position: relative;
    align-self: flex-end;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 20px;
    display: none;

    &:hover > ${Burger} {
        background: ${colours.orange};
    }

    @media( max-width: 1100px ) {
        display: initial;

    }
`;



const HeaderNav: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <HeaderNavContainer>
            <img src={logoWhite} alt="Howard Havens Logo" />
            <NavItemsRightContainer menuOpen={menuOpen}>
                <BurgerContainer menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><Burger menuOpen={menuOpen} /></BurgerContainer>
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