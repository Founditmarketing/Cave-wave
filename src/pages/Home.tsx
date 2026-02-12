import React from 'react';
import Hero from '../../components/Hero';
import Packages from '../../components/Packages';
import FastPassInfo from '../../components/FastPassInfo';
import VideoShowcase from '../../components/VideoShowcase';
import QRCodeCTA from '../../components/QRCodeCTA';
import Locations from '../../components/Locations';

interface HomeProps {
    triggerAnimation: boolean;
}

const Home: React.FC<HomeProps> = ({ triggerAnimation }) => {
    return (
        <>
            <Hero triggerAnimation={triggerAnimation} />
            <Packages />
            <FastPassInfo />
            <VideoShowcase />
            <QRCodeCTA />
            <Locations />
        </>
    );
};

export default Home;
