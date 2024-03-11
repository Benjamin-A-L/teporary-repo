import React from "react";
import styled from "styled-components";
// import { Link } from "gatsby";
import scrollTo from "gatsby-plugin-smoothscroll";


const NavWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, auto);
    justify-content: right;
    align-items: center;
    gap: 20px;

    z-index: 4;
    height: 5rem;
    border-bottom: 2px solid black;
    position: sticky;
    top: 0;
    background-color: white;

    button{
        border: none;
        border-radius: 3px;
        padding: 6px 8px;
        font-size: 16px;
        transition: 0.6s;
    }
    button:hover{
        cursor: pointer;
    }
`

export const Navbar = () => {
    return(
        <NavWrapper>
            <button onClick={()=> scrollTo('.hero-section')}>Inicio</button>
            <button onClick={()=> scrollTo('.services-section')}>Servicios</button>
            <button onClick={()=> scrollTo('.about-us-section')}>Nosotros</button>
            <button onClick={()=> scrollTo('.calendly-section')}>Contacto</button>
        </NavWrapper>
    )
}