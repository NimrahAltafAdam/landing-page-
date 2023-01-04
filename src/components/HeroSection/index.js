import React, {useState} from 'react'
import {HeroContainer, 
HeroBg,
HeroContent,
ServicesH1,
ServicesWrapper, ServicesCard, ServicesIcon,ServicesH2,ServicesP
} from "./HeroElements";

import { stakeInfo } from './info';



const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }
  return (
    <>
        <HeroContainer id='home'>
        <HeroBg>
            
        </HeroBg>
        <HeroContent>
        <ServicesH1>
            EPOCH STAKING
        </ServicesH1>
        <ServicesWrapper>
        {stakeInfo.map((info) => (
          <ServicesCard>
        <ServicesP>{info.stakeName}</ServicesP>
        <ServicesH2>{info.stakeRate}</ServicesH2>
        </ServicesCard>
            ))}
        
        </ServicesWrapper>
        </HeroContent>
        </HeroContainer>
    </>
  )
}

export default HeroSection