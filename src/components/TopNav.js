import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
    display: none;
    list-style: none;
    z-index: -99;
    @media only screen and (width <= 750px) {
        display: flex;
        align-items: center;
        flex-flow: column nowrap;
        position: absolute;
        flex-direction: row;
        justify-content: space-around;
        transform: ${({ open }) => open ? 'translateY(0%)' : 'translateY(-200%)'};
        top: 3.3rem;
        right: 0;
        height: 10vh;
        width: 100%;
        background-color: #fff;
        transition: transform 0.3s ease-in-out;
    }
`;

const Li = styled.li`
    font: 300 1rem 'Montserrat', sans-serif;
    transition: .5s ease-in-out;
    color: #000000;
    a {
        text-decoration: none;
        color: #000000;
    }
    
    &:hover {
        font-weight: 900;
        font-size: 1.2rem;
        cursor: pointer;
    }

    @media only screen and (width <= 375px) {
        font-size: .9rem;
    }
`;

export default function RightNav({ open }) {
    return (
        <Ul open={open}>
            <Li><a href='#top'>Home</a></Li>
            <Li>Blog</Li>
            <Li>Valores</Li>
            <Li>Portfólio</Li>
            <Li>Contato</Li>
        </Ul>
    )
}