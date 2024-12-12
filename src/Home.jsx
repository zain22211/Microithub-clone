import './App.css'
import Contactinfo from './assets/Components/Navbar/Contactinfo'
import Section1 from './assets/Components/Navbar/Section1'
import Services from './assets/Components/Navbar/Services'
import Whoweare from './assets/Components/Navbar/Whoweare'
import Workprocess from './assets/Components/Navbar/Workprocess'
import Whychooseus from './assets/Components/Navbar/Whychooseus'
import Footer from './assets/Components/Navbar/Footer'
import CustomCursor from './CustomCursor'
import Navbar from './assets/Components/Navbar/Navbar'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

  useEffect(() => {
    AOS.init({duration:1200})
  })


  return (
    <div>
    return (
        <div className=" h-auto w-full overflow-hidden " >
        <CustomCursor />
        <Navbar />
        <Section1 />
        <Services />
        <Whoweare />
        <Contactinfo />
        <Workprocess />
        <Whychooseus />
        
        </div>
       
    </div>
  )
}

export default Home