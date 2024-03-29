import React, {useState, useEffect} from 'react';
import {FaBars} from "react-icons/fa";
import { IconContext } from 'react-icons/lib';
import {animateScroll as scroll} from "react-scroll";
import {Nav, 
    NavbarContainer, 
    MobileIcon,
    NavBtn,
    NavBtnLink,
    NavBtnLink1
} from "./NavbarElements"

const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }
  return (
   <>
   <IconContext.Provider value={{color: '#fff'}}>
       <Nav scrollNav={scrollNav}>
           <NavbarContainer>
               <MobileIcon onClick={toggle}>
                   <FaBars />
               </MobileIcon>
               <NavBtn>
                   <NavBtnLink >Buy Pass</NavBtnLink>
                   <NavBtnLink1 >Connect Wallet</NavBtnLink1>
               </NavBtn>
           </NavbarContainer>
       </Nav>
       </IconContext.Provider>
   </>
  )
}

export default Navbar

