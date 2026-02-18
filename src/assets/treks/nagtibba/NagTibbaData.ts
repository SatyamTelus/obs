import img1 from '../kedarkantha/kedarkantha.jpg'; // Placeholder using Kedarkantha images which look similar
import img2 from '../kedarkantha/kedarkantha_1.png';
import img3 from '../kedarkantha/kedarkantha_2.png';
import type { TrekData } from '../TrekData';

export const nagTibbaData: TrekData = {
    id: 'nagtibba-girls',
    title: 'Nag Tibba Trek (All Girls Trip)',
    date: 'March 8-10, 2026',
    duration: '3 Days / 2 Nights',
    difficulty: 'Easy-Moderate',
    location: 'Mussoorie, Uttarakhand',
    images: [
        img1,
        img2,
        img3
    ],
    brochure: '#', // To be added
    description: 'Celebrate Women\'s Day with an exclusive All Girls Trip to Nag Tibba! Experience the thrill of trekking to the Serpent\'s Peak, camping under the stars, and bonding with like-minded women in a safe and supportive environment.',
    highlights: [
        'Exclusive All Girls Trip',
        'Summit climb to 9,915 ft',
        'Safe and supportive environment',
        'Bonfire and music night',
        'Women\'s Day celebration',
        'Panoramic views of Bandarpoonch & Gangotri peaks'
    ],
    itinerary: [
        {
            day: 'Day 1',
            title: 'Dehradun → Pantwari → Camp 1',
            description: 'Drive to Pantwari (3 hrs). Trek to base camp (4 km). Sunset and bonfire.',
            type: 'Trek'
        },
        {
            day: 'Day 2',
            title: 'Camp 1 → Nag Tibba Summit → Camp 1',
            description: 'Summit climb ensuring panoramic Himalayan views. Return to campsite for celebration.',
            type: 'Trek'
        },
        {
            day: 'Day 3',
            title: 'Camp 1 → Pantwari → Dehradun',
            description: 'Descend to Pantwari. Drive back to Dehradun with memories.',
            type: 'Travel'
        }
    ],
    inclusions: [
        'Accommodation in tents',
        'All meals during the trek',
        'Trek leader and female support staff',
        'Forest permits and entry fees',
        'Safety equipment (First Aid, Oximeter)',
        'Transportation from Dehradun to Pantwari & back'
    ],
    exclusions: [
        'Personal trekking gear',
        'Any personal expenses',
        'Meals during transit'
    ],
    pricing: {
        trekFee: 4500,
        transportationFee: 1500,
        totalCostWithTransport: 6000,
        totalCostWithoutTransport: 4500,
        registrationFee: 2000,
        remainingAmountWithTransport: 4000,
        remainingAmountWithoutTransport: 2500,
        paymentDeadline: 'March 1, 2026'
    },
    paymentLinks: {
        fullPaymentWithTransport: '#',
        fullPaymentWithoutTransport: '#',
        registrationOnly: '#',
        remainingDuesWithTransport: '#',
        remainingDuesWithoutTransport: '#'
    },
    cancellationPolicy: [
        {
            period: 'Before March 1',
            fee: '₹1,000',
            refund: 'Remaining amount'
        },
        {
            period: 'After March 1',
            fee: '100%',
            refund: 'No refund'
        }
    ],
    transportationRoute: 'Dehradun to Dehradun',
    registrationLink: 'https://wa.me/917983414419?text=I%20am%20interested%20in%20Nag%20Tibba%20All%20Girls%20Trip'
};
