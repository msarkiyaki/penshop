import React from 'react';
import Carousel from '../components/Carousel';
import Message from '../components/Message';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
    <Message />
    <Navbar />
    <Carousel />
    </div>  
  );
};

export default Home;
