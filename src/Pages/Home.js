import React from 'react';
import Navb from "../components/Navbar";
import CarouselT from "../components/Carousel";
import Cards from "../components/Cards";
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="Home">
      <Navb />
      <CarouselT />
      <Cards />
      <Footer/>
    </div>
  );
}

export default Home;
