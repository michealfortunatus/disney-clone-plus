import React from 'react';
import styled from 'styled-components';


const Header = () => {
  return (
    <Nav>
        <Logo src="/images"/>
        <NavMenu>
            <a href='/'>
                <img src="/images/" alt=""/>
                <span>HOME</span>
            </a>
            <a href='/'>
                <img src="/images/" alt=""/>
                <span>SEARCH</span>
            </a>
            <a href='/'> 
                <img src="/images/" alt=""/>
                <span>WATCHLIST</span>
            </a>
            <a href='/'>
                <img src="/images/" alt=""/>
                <span>ORIGINALS</span>
            </a >
            <a href='/'>
                <img src="/images/" alt=""/>
                <span>MOVIES</span>
            </a>
            <a href='/'>
                <img src="/images/" alt=""/>
                <span>SERIES</span>
            </a>
        </NavMenu>
        <userImg  src="/"/>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
   height: 70px;
   Background:#090b13;
   display:flex;
   align-items: center;
   padding:0 36px;
   overflow-x:hidden;
   `
   
   

   const Logo = styled.img`
   width:80px;

   
   `
   const NavMenu = styled.div`
   display:flex;
   flex: 1;
   margin-left:25px;
   align-items:center;

   a {
    display:flex;
    align-items: center;
    paddiing:0 12px;
    cursor:pointer;

    img{
        height:20px;
       }

       span{
        font-size:13px;
        letter-spacing:1.42px;
        position:relative;

       &:after{
        content:"";
        height:2px;
        background:white;
        position:absolute;
        left:0;
        right:0;
        bottom:-6px;
        opacity:0;
        transform:scaleX(0);
        transform-origin:left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94)0s;
        transform:scaleX(0);
       }

    }
    &:hover{
        span:after;
        transform:scale(1);
        opacity:1;
    }
    
   }
   
   `

   const userImg = styled.img`
   width:48px;
   height:48px;
   border-radius:50px;
   cursor:pointer;

   
   `