import React from 'react'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Food from './components/food/Food'
import Footer from './components/footer/Footer'


//import images
import craft1 from './assets/craft1.jpg'
import craft2 from './assets/craft2.jpg'
import Chicken from './assets/chicken.jpg'
import Burger from './assets/burger.jpg'
import HeroBg  from './assets/hero-bg.jpg'



function App() {
  
  return (
    <>
      <Navbar />
      <Hero />
      <Food bgImg1={craft1} bgImg2={craft2} /> 
      <Food bgImg={Chicken}  /> 
      <Food bgImg={Burger}  /> 
      <Footer />
    </>
  );
}

export default App;
