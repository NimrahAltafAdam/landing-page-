import React ,{useState} from 'react'
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'
import { Sidebar1 } from '../components/SidebarActive';


const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
    <Sidebar1 />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
        

    </>
  );
};

export default Home;