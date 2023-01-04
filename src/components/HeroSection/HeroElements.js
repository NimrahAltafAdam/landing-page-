import styled from "styled-components";
//import {MdKeyboardArrowRight, MdArrowForward} from "react-icons/md"

export const HeroContainer = styled.div`
 background: #0c0c0c;
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 0 30px;
 height: 1200px;
 position: relative;
 z-index: 1;
 background-image: url('https://s3-alpha-sig.figma.com/img/8280/f4d2/c504090b21501e62c9ad25ecc6a551b4?Expires=1673827200&Signature=S1DA7fsfvbJ5RBVpK4y6C4EBj7kkqL-IptlLUkd~Z5Iku2Q-hnYo-tOsEfdjEHKqsu4IOzBne-WtSvT3UHTcWB8mdr2sQ9B1YEVgUqs4MoGeDVO6FUHlo6sDn6MgjCyO3yAB8SvoFOyl5mUbQ6WBenw7fNHt-S9xFRSXJjgnuIF2BCCvN~babGo0wFkvitBsaH58e-DbsrMm7Q7aJO5YuRx-famY~feW70oTnp9yhKhBDbdSZoMcFHr8hnNhFZp-VuFu~R4Z~pGl1viJezpERmLKrBYej5C3tmNpaf0hEPZJFSFus5~6DbMyE~8f5CQ1c1KO-UYQxYF4RwFaNtobwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4');
 background-size: cover;

 @media screen and (max-width: 768px) {
    height: 2000px;
 }

 @media screen and (max-width: 480px) {
    height: 1500px;
 }


`;



export const HeroBg = styled.div`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 width: 100%;
 height: 100%;
 overflow: hidden;
`



export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  top:25%;
  left:35%;
  
  @media screen and (max-width: 480px) {
    left:0%;
    top:5%;
 }
  `

  export const ServicesH1 = styled.h1`
  color: #F89E1B;
  
  margin-bottom: 64px;
  font-family: 'Jost', sans-serif;
  font-style: normal;
font-weight: 700;
font-size: 40px;
line-height: 58px;

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }

 `

 export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }

`;

export const ServicesCard = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid rgba(255, 255, 255, 0.5);
backdrop-filter: blur(4px);
border-radius: 15px;

  border-color: #fff;
  
  height: 147px;
  width: 442px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 480px) {
    height: 120px;
  width: 350px;
 }
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  `;


  export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #fff;
  padding:20px;
  `;

  export const ServicesH2 = styled.h2`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 10px;
  font-weight: bold;
`;

  /*export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

 @media screen and (max-width: 768px) {
    font-size: 40px;
 }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
  `

  export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;

  max-width: 600px;

 @media screen and (max-width: 768px) {
    font-size: 24px;

  @media screen and (max-width: 480px) {
    font-size: 18px;
`

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`

export const ArrowRight = styled (MdKeyboardArrowRight)`
margin-left: 8px;
  font-size: 20px;
`*/