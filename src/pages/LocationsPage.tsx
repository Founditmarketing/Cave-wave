import React, { useEffect } from 'react';
import Locations from '../../components/Locations';

const LocationsPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 min-h-screen bg-slate-50 dark:bg-brand-dark">
            <Locations />
        </div>
    );
};

export default LocationsPage;
