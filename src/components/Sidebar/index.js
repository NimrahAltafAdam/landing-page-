import React from 'react'
import { SidebarContainer,

SidebarWrapper,
SidebarMenu,
SidebarLink,
SideBtnWrap,
Btn1Link,
Btn2Link,
Icon,
CloseIcon
 } from './SidebarElements'

 
 
export const Sidebar = ({isOpen, toggle}) => {
  return (
   <SidebarContainer isOpen = {isOpen} onClick={toggle}>
   <Icon onClick= {toggle}>
       <CloseIcon />
       </Icon>
       
       <SidebarWrapper>
           <SidebarMenu>
               <SidebarLink to="dashboard">
               Dashboard
               </SidebarLink>
               <SidebarLink to="analytics" >
               Analytics
               </SidebarLink>
               <SidebarLink to="stake">
               Stake
               </SidebarLink>
               <SidebarLink to="bond" >
               
               Bond
               </SidebarLink>
               
               <SidebarLink to="byPass" >
               Buy Pass
               </SidebarLink>
               <SidebarLink to="pricechart" >
               Price Chart
               </SidebarLink>
               <SidebarLink to="documentation" >
               Documentation
               </SidebarLink>
               <SideBtnWrap>
                <Btn1Link>
                    Buy Pass
                </Btn1Link>
                <Btn2Link>Connect Wallet</Btn2Link>
               </SideBtnWrap>
           </SidebarMenu>
       </SidebarWrapper>
   </SidebarContainer>
  )
}
