import SEO from '../components/SEO';
import React from 'react';
import Hero from '../../components/Hero';
import Packages from '../../components/Packages';
import FastPassInfo from '../../components/FastPassInfo';
import DetailStationInfo from '../../components/DetailStationInfo';
import VideoShowcase from '../../components/VideoShowcase';
import QRCodeCTA from '../../components/QRCodeCTA';
import Locations from '../../components/Locations';

interface HomeProps {
    triggerAnimation: boolean;
}

const Home: React.FC<HomeProps> = ({ triggerAnimation }) => {
    return (
        <>
        <SEO title="Cave Wave Car Wash | Premium Auto Wash Services in Texas" description="Experience the ultimate car wash at Cave Wave! Unlimited monthly wash plans from $24.99, express lanes, free detailing stations, and LPR technology in Paris, Longview & Texarkana, TX." canonical="/" />
        <>
            <Hero triggerAnimation={triggerAnimation} />
            <Packages />
            <FastPassInfo />
            <DetailStationInfo />
            <VideoShowcase />
            <QRCodeCTA />
            <Locations />
        </>
        </>
    );
};

export default Home;
