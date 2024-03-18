import React, { useEffect } from 'react';
import styled from "styled-components";
import scrollTo from "gatsby-plugin-smoothscroll";



  const SideHandler = () => {
    const target = document.querySelector('#nav-mobile-container');
    target.classList.toggle('side-nav-active');
  };


const SideLinkHandler = (target) =>{
    scrollTo(target);
    SideHandler();
}

const NavWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, auto);
    justify-content: right;
    align-items: center;
    gap: 20px;

    z-index: 4;
    height: 5rem;
    width: 100%;
    padding-right: 1rem;
    box-shadow: 0px 0px 1000px 1px rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    background-color: white;

    @media(max-width: 821px) {
        .nav-btn{display: none}
    }
    .nav-btn{
        border: none;
        border-radius: 3px;
        padding: 6px 8px;
        font-size: 16px;
        transition: 0.6s;
    }
    .nav-btn:hover{
        cursor: pointer;
    }
    @media(max-width: 820px){
        grid-tmplate-columns: auto;
        justify-content: right;

        .nav-link-btn{
            display: none;
        }

        .side-nav-btn{
            display: block;
            cursor: pointer;
            border: none;
            background-color: transparent;
        }
        .side-icon-container{
            display: grid;
            width: 50px;
            grid-template-rows: repeat(3, auto);
            gap: 6px;
            background-color: transparent;
        }
        .oval{
            background-color: transparent;
            border: solid black 3px;
            // border-radius: 5px;
            border-top-left-radius: 24% 100%;
            border-top-right-radius: 24% 100%;
            border-bottom-left-radius: 24% 100%;
            border-bottom-right-radius: 24% 100%;
            width: 50px;
            height: 10px;
        }
    }
    @media(min-width: 821px){
        .side-nav-btn{
            display: none;
        }
    }
`

export const Navbar = () => {
    return(
        <NavWrapper>
            <button className='nav-btn' onClick={()=> scrollTo('.hero-section')}>Inicio</button>
            <button className='nav-btn' onClick={()=> scrollTo('.services-section')}>Servicios</button>
            <button className='nav-btn' onClick={()=> scrollTo('.about-us-section')}>Nosotros</button>
            <button className='nav-btn' onClick={()=> scrollTo('.calendly-section')}>Contacto</button>
            <button onClick={()=> SideHandler()} className='side-nav-btn'>
                <div className='side-icon-container'>
                    <div className='oval oval1'></div>
                    <div className='oval oval2'></div>
                    <div className='oval oval3'></div>
                </div>
            </button>
        </NavWrapper>
    )
}


const MNavwrapper = styled.nav`
    display: grid;
    grid-template-columns: auto auto;
    
    position: fixed;
    right: -100%;
    top: 0;
    z-index: 10;

    background-color: grey;
    height: 100vh;
    transition: 1s;
    
    .extra-layer-wrapper{
        display: grid;
        grid-template-rows: auto auto auto auto 1fr;
        justify-content: left;
        z-index: 12;
        gap: 0.4rem;
        
        height: 100vh;
        background-color: white;
    }
    .logo-link-mobile{
        background: none;
        border: none;
        cursor: pointer;
    }
    .nav-btn-mobile{
        justify-self: left;
        cursor: pointer;
        text-align: left;
        position: relative;

        background: none;
        border: none;
        font-size: 18px;
        padding: 10px 0px 10px 0px;
        width: 100%;
    }


    .side-nav-close{
        align-self: top;
        justify-self: center;
        justify-content: center;
        align-items: center;
        position: relative;
        
        background-color: transparent;
        border: none;
        margin-top: 8px;
        margin-inline: 0.3rem;
        height: 32px;
        width: 32px;
        cursor: pointer;
    }
    .side-nav-close::before,
    .side-nav-close::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 3.6px;
        background-color: white;
        border-radius: 8px;
    }
    .side-nav-close::before,
    .side-nav-close::after:hover{
        background-color: black;
    }

    .side-nav-close::before {
        transform: rotate(45deg);
    }

    .side-nav-close::after {
        transform: rotate(-45deg);
    }

    .nav-btn-mobile:hover{
        color: white;
    }
    .nav-btn-mobile:hover .btn-bg{width: 100%}
    .nav-btn-mobile::before{
        transition: opacity 0.4s ease, transform 0.4s ease;
        content: "- ";
        right: 10px;
        opacity: 0;
        transform: translateX(-100%); 
        margin-left: 8px;  
    }
    .nav-btn-mobile:hover::before{
        opacity: 1;
        transform: translateX(0);
    }
    .btn-bg{
        position: absolute;
        right: 0px;
        top: 0px;
        height: 100%;
        background-color: grey;
        width: 0px;
        z-index: -2;
        transition: 0.4s;
        border-top-left-radius: 6% 6%;
        border-bottom-left-radius: 6% 6%;
    }
    .fillout{
        width: 50vw;
    }
    @media(max-width: 820px){
        &.side-nav-active{
            right: 0;
        }
        .extra-layer-wrapper{
            right: 0;
        }
    }
    @media(min-width: 821px){
        right: -100;
    }

`

export const MNavbar = () =>{

    return(
        <MNavwrapper id='nav-mobile-container'>
            <button onClick={()=> SideHandler()} className='side-nav-close'></button>
            <div className="extra-layer-wrapper">
                <button className='nav-btn-mobile' onClick={()=> SideLinkHandler('.hero-section')}>Inicio <div className='btn-bg'/></button>
                <button className='nav-btn-mobile' onClick={()=> SideLinkHandler('.services-section')}>Servicios <div className='btn-bg'/></button>
                <button className='nav-btn-mobile' onClick={()=> SideLinkHandler('.about-us-section')}>Nosotros <div className='btn-bg'/></button>
                <button className='nav-btn-mobile' onClick={()=> SideLinkHandler('.calendly-section')}>Contacto <div className='btn-bg'/></button>
                <div className='fillout'/>
            </div>
        </MNavwrapper>
    )
}