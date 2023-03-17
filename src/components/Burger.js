import React, { useState } from 'react';
import styled from 'styled-components';
import TopNav from './TopNav';

const StyledBurger = styled.section`
    width: 2rem;
    height: 2rem;
    transition: all .3s linear;
    display: none;
    @media (max-width: 750px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }
    section {
        width: 2rem;
        height: .25rem;
        background-color: #fff;
        border-radius: .625rem;
        transform-origin: .0625rem;
        transition: all .3s linear;
        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ open }) => open ? 0 : 1};
        }
        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`;

export default function Burger(){
    const [open, setOpen] = useState(false);

    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <section />
                <section />
                <section />
            </StyledBurger>
            <TopNav open={open} />
        </>
    )
}