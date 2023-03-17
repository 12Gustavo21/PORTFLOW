import styled from "styled-components";

import Background from "./assets/images/Background.png";

export const Header = styled.header`
    width: 100%;
    height: 100vh;
`;

export const HeaderContainer = styled.section`
    width: 100%;
    height: 100%;
`;

export const BoxOne = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 15vh;
    width: 100%;
    background-color: #FFFFFF;
    padding: 0 5% 0 5%;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    box-shadow: ${props => props.showMenu ? '0 0 20px #111' : 'none'};
    background-color: ${props => props.showMenu === '#FFFFFF'};
    transform: ${props => props.hiddenMenu ? 'translateY(-100%)' : 'translateY(0)'};
    transition: .4s;
    z-index: 2;

    @media only screen and (width <= 750px) {
        height: 8vh;
        padding: 0;
        justify-content: flex-start;
        gap: 5rem;
    }
`;

export const MenuBox = styled.section`
    width: 35%;
    height: 100%;
    background-color: #000;
    display: none;

    @media only screen and (width <= 750px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const LogoBox = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
    height: 100%;
`;

export const Logo = styled.h1`
    font: bold 2.5rem 'Montserrat', sans-serif;

    @media only screen and (width <= 750px) {
        font-size: 2rem;
    }
`;

export const ListBox = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;

    @media only screen and (width <= 750px) {
        display: none;
    }
`;

export const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
    list-style: none;
`;

export const ListItem = styled.li`
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
`;

export const BoxTwo = styled.section`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
    width: 100%;
    padding: 7% 0 7% 7%;
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;

    @media only screen and (width <= 560px) {
        background-position: calc(-60rem);
    }

    @media only screen and (width <= 375px) {
        background-position: calc(-70rem);
    }
`;

export const BoxTwoContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    gap: 3rem;

    @media only screen and (width <= 750px) {
        justify-content: flex-end;
    }
`;

export const Title = styled.section`
    font: 900 2.5rem 'Montserrat', sans-serif;
    color: #FFFFFF;
    word-wrap: break-word;
`;

export const Subtitle = styled.section`
    font: 300 1.5rem 'Montserrat', sans-serif;
    color: #FFFFFF;
    text-transform: uppercase;
    word-wrap: break-word;
`;

export const Main = styled.main`
    width: 100%;
    min-height: 100vh;
    padding: 5% 0 3% 0;
`

export const MainContainer = styled.section`
    width: 100%;
    min-height: 100%;
`;

export const MainContent = styled.section`
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

export const Figures = styled.figure`
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50%;
    gap: 1rem;
    flex-wrap: wrap;
`;

export const ImageBox = styled.section`
    overflow: hidden;
    position: relative;

    img {
        width: 20rem;
        height: 20rem;
        display: block;
        object-fit: cover;
        object-position: center;
        transition: .5s ease;
    }
    
    img:hover {
        transform: scale(1.2);
        filter: grayscale(80%);
    }

    @media only screen and (width <= 1024px) {
        img {
            width: 15rem;
            height: 15rem;
        }
    }
`;

export const Footer = styled.footer`
    width: 100%;
    min-height: 20vh;
    background-color: #F4F3F3;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (width <= 1000px) {
        background-color: #fff;
    }
`;

export const FooterContainer = styled.section`
    width: 100%;
    height: 100%;
`;

export const FooterContent = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        display: none;
        background-color: #333333;
        width: 4.25rem;
        height: 1.5625rem;
        border: none;
    }

    @media only screen and (width <= 1000px) {
        flex-direction: column;
        gap: 3rem;
        padding: 2% 0 2% 0;

        button {
            display: block;
        }

        button a {
            text-decoration: none;
            color: #707070;
        }

        button:hover {
            border-radius: 20%;
        }
    }

    @media only screen and (width <= 425px) {
        gap: 1rem;
        padding: 5% 0 5% 0;
    }
`;

export const Icons = styled.figure`
    width: 40%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    img {
        width: 2.5rem;
        height: 2.5rem;
        transition: .5s ease;
    }

    img:hover {
        cursor: pointer;
        transform: scale(1.2);
        filter: drop-shadow(.1rem .1rem .5rem #000);
    }

    @media only screen and (width <= 1024px) {
        img {
            width: 2rem;
            height: 2rem;
        }
    }

    @media only screen and (width <= 1000px) {
        background-color: #7FDBD4;
        padding: 1rem;
        gap: 3rem;
        width: 50%;
    }

    @media only screen and (width <= 625px) {
        width: 90%;
    }

    @media only screen and (width <= 480px) {
        gap: 1.5rem;

        img {
            width: 1.5rem;
            height: 1.5rem;
        }
    }
`;

export const References = styled.section`
    width: 60%;
    height: 50%;

    @media only screen and (width <= 1000px) {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    @media only screen and (width <= 625px) {
        width: 90%;
    }
`;

export const Copyright = styled.section`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    h3 {
        font: 700 1.3rem 'Montserrat', sans-serif;
        word-wrap: break-word;
    }

    p, a {
        font: 300 .9rem 'Montserrat', sans-serif;
        text-decoration: none;
        color: #000000;
        transition: .5s linear;   
        word-wrap: break-word;     
    }

    a:hover {
        font-weight: 500;
    }
    
    a:visited {
        color: #259f97;
    }


    @media only screen and (width <= 1024px) {
        h3 {
            font-size: 1rem;
        }

        p, a {
            font-size: .7rem;
        }
    }

    @media only screen and (width <= 1000px) {
        flex-direction: column;
        gap: 0;
        align-items: flex-start;
        width: 50%;
    }

    @media only screen and (width <= 345px) {
        p, a {
            font-size: .65rem;
        }
    }
`;