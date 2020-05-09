import React from 'react';
import logo from '../logo.svg';
import styled from 'styled-components';

const HeaderNavMain = styled.div`
    width: 100%;
    height: 150px;
    background: lightgrey;
`

const HeaderNav: React.FC = () => {
    return (
        <HeaderNavMain>
            <img src={logo} alt="Howard Havens Logo" />
        </HeaderNavMain>
    );
}

export default HeaderNav;