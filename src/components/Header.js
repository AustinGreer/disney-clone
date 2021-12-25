import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

function Header() {
    return (
        <StyledHeader>
            <Link to="/">
                <img src="/images/logo.svg" alt="header-logo" />
            </Link>
        </StyledHeader>
    )
};

const StyledHeader = styled.nav`
    display: flex;
    justify-content: space-between;
    padding-top: 1%;
    padding-bottom: 1%;
    position: fixed;
    background-color: #090b13;
    align-items: center;
    letter-spacing: 16px;
    z-index: 3;
    width: 100%;

    a {
        margin-left: 2%;
        
        img {
            width: 35%;
        }

    }

`

export default Header;
