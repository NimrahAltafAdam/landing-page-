import styled from "styled-components";
import {FaTimes} from "react-icons/fa";
import {Link as LinkS} from "react-scroll";
import {Link as LinkR} from "react-router-dom";


export const SidebarContainer = styled.aside`
 position: fixed;
 z-index: 999; /*WANT IT TO BE ABOVE EVERYTHING*/
 width: 20%;
 height: 100%;
 background: #0d0d0d;
 display: grid;
 align-items: center;
 top: 0;
 left:0;
 transition: 0.3s ease-in-out;
 opacity: '100%';
 top: '0';

 border-right: 2px solid #545454;
 overflow: auto;
 @media screen and (max-width:768px) {
     display: none;
 }

`



export const Logo = styled(LinkR)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;
font-family: 'Permanent Marker', cursive;
margin-top:20px;
`;



export const Img = styled.img`
 width: 50px;
  height: 50px;
`;

export const Icon = styled.img`
 width: 20px;
  height: 20px;
  margin-right: 10px;
`;





export const SidebarWrapper = styled.div`
 color: #fff;
`

export const SidebarMenu = styled.div`
 display: grid;
 grid-template-columns: 1fr;
 grid-template-rows: repeat(9, 80px);
 text-align: left;

 @media screen and (max-width: 480px) {
     grid-template-rows: repeat(9, 60px);
 }
`

export const SidebarLink = styled(LinkS)`
 display: flex;
 align-items: left;
 justify-content: left;
 font-size: 15px;
 text-decoration: none;
 list-style: none;
 transition: 0.2s ease-in-out;
 text-decoration: none;
 color: #fff;
 cursor: pointer;
 padding: 20px;
 margin-top:-15px;
 

 &:hover {
     color: #F89E1B;
     transition: 0.2s ease-in-out;
 }
`

export const BondInfo = styled.div` 
 align-items: center;
 justify-content:center;
 text-align: center;
`

export const BondTitle = styled(LinkS)`
color: #6A6971;
font-size: 0.9rem;
`
export const BondType = styled(LinkS)`
display: flex;
color: #fff;

padding: 15px;
 justify-content:center;
 font-size: 0.7rem;
`
export const BondRate = styled.p`
color: #fff;
margin-left: 30px;
font-size: 0.7rem;
`

export const LastSection = styled.div`
  margin-top: 180px;
`

export const SocialMediaIconWrap= styled.div`
display : flex;
align-items: center;
justify-content:center;
`

export const SocialMediaIcon = styled.img`
 width: 20px;
  height: 20px;
  margin-right: 40px;
  cursor: pointer;
 
`;
