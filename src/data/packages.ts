export const packages = [
    {
        name: 'Basic Wave',
        price: '24.99',
        singlePrice: '10.00',
        description: 'Don\'t Break the Bank to Keep Your Car Clean. Schedule basic car washing services today.',
        longDescription: 'If you need to clean your vehicle often, the cost of every wash can add up fast. Luckily, you don\'t have to pay an arm and a leg for frequent trips to the car wash. Cave Wave Car Wash offers a monthly basic car wash service plan to clients at all our locations.',
        features: ['Two foam baths', 'A spot-free rinse', 'A drying agent', 'Bug prep'],
        addOns: [
            { name: 'Shine', price: '$4' },
            { name: 'Cave Shield ceramic coating', price: '$4' },
            { name: 'Carnauba wax job', price: '$3' }
        ],
        color: 'from-brand-neonBlue to-cyan-400'
    },
    {
        name: 'Splash Wave',
        price: '29.99',
        singlePrice: '16.00',
        description: 'Give Your Car a Little Extra Shine. Sign up for our Splash car wash package today.',
        longDescription: 'Your car does a lot for you, so why not give it the royal treatment? With the splash car wash package from Cave Wave Car Wash, you can keep your car looking great for an affordable price. We offer this package to clients at all our locations.',
        features: ['Bug prep', 'Wheel cleaner', 'Tri-foam polish', 'Everything in the basic package'],
        addOns: [
            { name: 'Shine', price: '$4' },
            { name: 'Cave Shield ceramic coating', price: '$4' },
            { name: 'Carnauba wax job', price: '$3' }
        ],
        color: 'from-blue-500 to-indigo-500'
    },
    {
        name: 'Mega Wave',
        price: '39.99',
        singlePrice: '20.00',
        description: 'Make Your Car the Envy of the Neighborhood. Get our Mega car wash package today.',
        longDescription: 'Are you tired of driving around in a dirty car? Do you want your vehicle to sparkle and shine? Cave Wave Car Wash has the perfect solution for you. We offer a mega car wash package for clients at all our locations.',
        features: ['Wheel cleaner', 'Tri-foam polish', 'Rain-X', 'Everything in the splash package'],
        addOns: [
            { name: 'Shine', price: '$4' },
            { name: 'Cave Shield ceramic coating', price: '$4' },
            { name: 'Carnauba wax job', price: '$3' }
        ],
        color: 'from-purple-500 to-pink-500'
    },
    {
        name: 'Tidal Wave',
        price: '49.99',
        singlePrice: '25.00',
        isBestValue: true,
        description: 'Give Your Vehicle the Ultimate Cleaning Treatment. Ask about our Tidal car wash package today.',
        longDescription: 'You love your car, so why not give it the best cleaning treatment possible? With the tidal car wash package from Cave Wave Car Wash, you can make your vehicle look as good as new. We offer this top-tier package to clients at all our locations.',
        features: ['Ceramic wax', 'Tire shine', 'Everything in the mega package'],
        addOns: [],
        color: 'from-brand-neonBlue via-brand-neonPink to-brand-neonBlue'
    }
];
