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
        <SEO title="Cave Wave Car Wash | Premium Auto Wash Services in Texas" description="Cave Wave Car Wash offers premium auto wash services with unlimited monthly plans, express lanes, and free detailing stations in Paris, Longview & Texarkana, TX." canonical="/" />
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
