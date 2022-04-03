import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Nav>
      <Logo src="/image/logo.svg" />
      <NavMenue>
        <a>
          <img src="/image/home-icon.svg" alt="home" />
          <span>Home</span>
        </a>
        <a>
          <img src="/image/search-icon.svg" alt="home" />
          <span>Search</span>
        </a>
        <a>
          <img src="/image/watchlist-icon.svg" alt="home" />
          <span>WatchList</span>
        </a>
        <a>
          <img src="/image/original-icon.svg" alt="home" />
          <span>Originals</span>
        </a>
        <a>
          <img src="/image/movie-icon.svg" alt="home" />
          <span>Movies</span>
        </a>
        <a>
          <img src="/image/series-icon.svg" alt="home" />
          <span>Series</span>
        </a>
      </NavMenue>
      <UserImg src="/image/user.png" />
    </Nav>
  );
};
const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 38px;
  overflow-x: hidden;
`;
const Logo = styled.img`
  width: 80px;
`;

const NavMenue = styled.div`
 display: flex;
 flex:1;
 margin-left:50px;
 align-items:center;
 a{
     display:flex;
     align-items:center;
     padding: 0 21px;
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
         opacity:0;
         bottom:-6px;
         transform:scaleX(0);
         transform-origin: left center;
         transition:all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        }
     }
     &:hover{
         span:after{
             transform:scaleX(1);
             opacity:1;
         }
     }
 }`;
const UserImg = styled.img`
  height: 48px;
  width: 48px;
  bordr-radius: 50%;
  cursor: pointer;
`;

export default Header;
