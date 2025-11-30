import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Education from './Education';
import Pricing from './Pricing';
import OpenAccount from '../../OpenAccount';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import Stats from './Stats';


function Home() {
    return ( 
        <>
            
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
            
        </>
     );
}

export default Home;
