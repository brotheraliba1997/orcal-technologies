import React from 'react'
import HeroBanner from './components/HeroBanner'
import AboutUs from './components/AboutUs'
import OurServices from './components/OurServices'
import "./globals.css";
import Wayofwork from './components/Wayofwork';
import CounterSection from './components/CounterSection';
import FAQ from './components/Faq';
import ContactUs from './components/ContactUs';
// import Viewourworks from './components/Viewourworks';
import Industriesweserved from './components/Industriesweserved';
import OurClients from './components/OurClients';



function Home() {
  return (
    <>
    <HeroBanner />
    <AboutUs />
    <OurServices />
    <Wayofwork />
    <CounterSection />
   
    
    {/* <Viewourworks /> */}
    <Industriesweserved />
    <OurClients />
     <FAQ />
    <ContactUs />
    </>
  )
}

export default Home