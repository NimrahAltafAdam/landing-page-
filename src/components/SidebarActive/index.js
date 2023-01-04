import React from 'react'
import { SidebarContainer,
    Logo,
    Img,
    Icon,
SidebarWrapper,
SidebarMenu,
SidebarLink,
BondInfo,
BondTitle,
BondType,
BondRate,
LastSection,
SocialMediaIconWrap,
SocialMediaIcon
 } from './SidebarElements'

 import img from  "../../images/logo.PNG"
 import icon1 from "./icon1.png";
 import icon2 from "./icon2.PNG";
 import icon3 from "./icon3.png";
 import icon4 from "./icon4.png";
 import icon5 from "./icon5.png";
 import icon6 from "./icon6.png";
 import icon7 from "./icon7.PNG";
 import twitter from "./twiiter.png";
 import discord from "./discord.png";
 import telegram from "./telegram.png";
 
export const Sidebar1 = () => {
  return (
   <SidebarContainer>
   <Logo to="/" >
    <Img src={img} />
        VAULT PASS
    </Logo>
       <SidebarWrapper>
           <SidebarMenu>
               <SidebarLink to="dashboard">
               <Icon src={icon1} />
               Dashboard
               </SidebarLink>
               <SidebarLink to="analytics" >
               <Icon src={icon2} />
               Analytics
               </SidebarLink>
               <SidebarLink to="stake">
               <Icon src={icon3} />
               Stake
               </SidebarLink>
               <SidebarLink to="bond" >
               <Icon src={icon4} />
               Bond
               </SidebarLink>
               <BondInfo>
                <BondTitle>Bond discounts</BondTitle>
                <BondType>
                XIV-BNB LP
                    <BondRate>-16.28%</BondRate>
                </BondType>
                <BondType>
                PASS-BNB LP
                    <BondRate>-16.28%</BondRate>
                </BondType>
                <BondType>
                XIV
                    <BondRate>-16.28%</BondRate>
                </BondType>
                <BondType>
                BNB
                    <BondRate>-16.28%</BondRate>
                </BondType>
                <BondType>
                BUSD
                    <BondRate>-16.28%</BondRate>
                </BondType>
               </BondInfo>
               <LastSection>
               <SidebarLink to="byPass" >
               <Icon src={icon5} />
               Buy Pass
               </SidebarLink>
               <SidebarLink to="pricechart" >
               <Icon src={icon6} />
               Price Chart
               </SidebarLink>
               <SidebarLink to="documentation" >
               <Icon src={icon7} />
               Documentation
               </SidebarLink>
               </LastSection>
           </SidebarMenu>
           <SocialMediaIconWrap>
           <SocialMediaIcon src={twitter} />
           <SocialMediaIcon src={discord} />
           <SocialMediaIcon src={telegram} />
           </SocialMediaIconWrap>
       </SidebarWrapper>
   </SidebarContainer>
  )
}
