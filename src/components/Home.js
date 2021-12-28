import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <Container>
            <Content>
                <img src='/images/cta-logo-one.svg' alt='cta-logo-one' />
                <Link to="/login" className='cta-button'>get started with disney today!</Link>
                <p className='description'>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/23/21, the price of Disney+ and The Disney Bundle will increase by $1.</p>
                <img id='logo-two' src="/images/cta-logo-two.png" alt='logo-two' />
            </Content>
        </Container>
    )
}

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
    background-image: url("/images/login-background.jpg");
`

const Content = styled.div`
    width: 100%;
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 80px 40px;
    height: 100vh;

    img {
        width: 40%;
        margin-bottom: 4%;
    }

    .cta-button {
        background: #0063e5;
        text-transform: uppercase;
        color: #f9f9f9;
        border-radius: 4px;
        border: none;
        font-size: 1.8rem;
        text-align: center;
        font-weight: 400;
        letter-spacing: 1px;
        padding: 1.2% 10%;
        cursor: pointer;
        margin-bottom: 1%;

        &:hover {
            background-color: #0483ee;
        }
    }

    .description {
        width: 50%;
        line-height: 1.5;
        font-size: 1.2rem;
        letter-spacing: 1.5px;
        color: silver;
        margin-bottom: 2%;
    }

    #logo-two {
        width: 45%;
    }
`

export default Home;
