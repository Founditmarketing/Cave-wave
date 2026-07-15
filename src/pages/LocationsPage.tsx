import SEO from '../components/SEO';
import React, { useEffect } from 'react';
import Locations from '../../components/Locations';

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.cavewavecarwash.com/" },
        { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://www.cavewavecarwash.com/locations" }
    ]
};

const LocationsPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
        <SEO title="Car Wash Locations | Paris, Longview & Texarkana TX | Cave Wave" description="Visit Cave Wave Car Wash in Paris, Longview & Texarkana, Texas. Open daily 8AM-8PM with express lanes and free detailing stations." canonical="/locations" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <div className="pt-24 min-h-screen bg-slate-50 dark:bg-brand-dark">
            <Locations />
        </div>
        </>
    );
};

export default LocationsPage;
