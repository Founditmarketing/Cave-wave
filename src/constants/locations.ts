export interface Location {
    id: string;
    city: string;
    address: string;
    phone: string;
    hours: string;
    mapLink: string;
    image: string;
    status: string;
    features: string[];
}

export const LOCATIONS: Location[] = [
    {
        id: 'paris',
        city: 'Paris',
        address: '4210 Lamar Ave, Paris, TX 75460',
        phone: '(903) 563-7774',
        hours: 'Mon-Sun: 8:00AM - 7:00PM',
        mapLink: 'https://maps.google.com/?q=4210+Lamar+Ave+Paris+TX+75460',
        image: '/location1.jpg',
        status: 'Open Now',
        features: ['Automatic Tunnel', 'Free Vacuums', 'Mat Cleaners']
    },
    {
        id: 'longview',
        city: 'Longview',
        address: '918 West Loop 281, Longview, TX 75604',
        phone: '(903) 305-5365',
        hours: 'Mon-Sun: 8:00AM - 8:00PM',
        mapLink: 'https://maps.google.com/?q=918+West+Loop+281+Longview+TX+75604',
        image: '/location3.jpg',
        status: 'Open Now',
        features: ['Express Wash', 'Free Vacuums', 'Detailing Kits']
    },
    {
        id: 'texarkana',
        city: 'Texarkana',
        address: '2705 Richmond Road, Texarkana, TX 75503',
        phone: '(430) 200-0250',
        hours: 'Mon-Sun: 8:00AM - 8:00PM',
        mapLink: 'https://maps.google.com/?q=2705+Richmond+Road+Texarkana+TX+75503',
        image: '/location2.jpg',
        status: 'Open Now',
        features: ['State-of-the-art Tunnel', 'Member Lane', 'Free Air']
    }
];
