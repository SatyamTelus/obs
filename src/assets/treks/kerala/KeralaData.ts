<<<<<<< HEAD
// Placeholder images – replace with Kerala trip images when available
import placeholder1 from '../bhramtal/bhrama_1.png';
import placeholder2 from '../bhramtal/bhrama_2.png';
import placeholder3 from '../bhramtal/bhrama_3.png';
import type { TrekData } from '../TrekData';

export const keralaData: TrekData = {
  id: 'kerala',
  title: 'Kerala Trip - Oh-Bhaisahab Experience',
  date: 'April 17-21, 2026',
  duration: '5 Days / 4 Nights',
  difficulty: 'Easy',
  location: 'Kerala',
  images: [placeholder1, placeholder2, placeholder3],
  // No brochure for Kerala
  description:
    'Explore the backwaters, hills and culture of Kerala with OBS. Early bird price ₹27,000 (original ₹30,000). Only 2 seats left at this discount. Pay ₹6,750 now and the rest later.',
  highlights: [
    'Early bird discount: ₹27,000 (original ₹30,000)',
    'Only 2 seats left at early bird price',
    'Pay ₹6,750 now, rest can be paid later',
    'April 17–21, 2026',
    'Backwaters, hills and cultural experiences',
  ],
  itinerary: [
    {
      day: 'Day 1',
      title: 'Arrival and orientation',
      description: 'Reach Kerala and settle in',
      type: 'Travel',
    },
    {
      day: 'Day 2',
      title: 'Exploration day',
      description: 'Activities and sightseeing',
      type: 'Trek',
    },
    {
      day: 'Day 3',
      title: 'Exploration day',
      description: 'Activities and sightseeing',
      type: 'Trek',
    },
    {
      day: 'Day 4',
      title: 'Exploration day',
      description: 'Activities and sightseeing',
      type: 'Trek',
    },
    {
      day: 'Day 5',
      title: 'Departure',
      description: 'Checkout and journey back',
      type: 'Travel',
    },
  ],
  inclusions: [
    'Stay for 4 nights',
    'Meals as per itinerary',
    'Activities and local transport as included',
    'Guide and coordination',
  ],
  exclusions: [
    'Travel to/from Kerala',
    'Personal expenses',
    'Anything not listed in inclusions',
  ],
  pricing: {
    trekFee: 27000,
    transportationFee: 0,
    totalCostWithTransport: 27000,
    totalCostWithoutTransport: 0,
    registrationFee: 6750,
    remainingAmountWithTransport: 20250,
    remainingAmountWithoutTransport: 0,
    paymentDeadline: 'TBD',
    originalPrice: 30000,
    earlyBirdSeatsLeft: 2,
  },
  paymentLinks: {
    fullPaymentWithTransport: '#',
    fullPaymentWithoutTransport: '#',
    registrationOnly: '#',
    remainingDuesWithTransport: '#',
    remainingDuesWithoutTransport: '#',
  },
  cancellationPolicy: [],
=======
import type { TrekData } from '../TrekData';

// Using generic nature images as placeholders until specific Kerala images are added
// Ideally user should provide these or we use what's available
// import coverImg from '../../cover-gen-min.png';

export const keralaData: TrekData = {
    id: 'kerala',
    title: 'Kerala Backpacking Trip',
    date: 'August 15-22, 2026',
    duration: '8 Days / 7 Nights',
    difficulty: 'Easy',
    location: 'Kerala (Munnar, Alleppey, Varkala)',
    images: [
        'placeholder',
        'placeholder', // Using cover image as placeholder for now
        'placeholder'
    ],
    brochure: '#',
    description: 'Experience God\'s Own Country like never before! From the misty tea gardens of Munnar to the serene backwaters of Alleppey and the cliff beaches of Varkala. This backpacking trip is a perfect mix of adventure, culture, and relaxation.',
    highlights: [
        'Tea Estate walks in Munnar',
        'Houseboat stay in Alleppey',
        'Cliff chill sessions in Varkala',
        'Kathakali cultural show',
        'Local cuisine exploration',
        'Beach hopping and sunsets'
    ],
    itinerary: [
        {
            day: 'Day 1',
            title: 'Arrival in Kochi -> Munnar',
            description: 'Reach Kochi. Drive to Munnar. Evening at leisure.',
            type: 'Travel'
        },
        {
            day: 'Day 2',
            title: 'Munnar Exploration',
            description: 'Visit tea museums, Mattupetty Dam, and local viewpoints.',
            type: 'Sightseeing'
        },
        {
            day: 'Day 3',
            title: 'Munnar to Thekkady',
            description: 'Drive to Periyar National Park. Spice plantation tour.',
            type: 'Travel'
        },
        {
            day: 'Day 4',
            title: 'Thekkady to Alleppey',
            description: 'Houseboat check-in. Cruising the backwaters.',
            type: 'Leisure'
        },
        {
            day: 'Day 5',
            title: 'Alleppey to Varkala',
            description: 'Drive to the coastal town of Varkala. Sunset at the cliff.',
            type: 'Travel'
        },
        {
            day: 'Day 6',
            title: 'Varkala Vibes',
            description: 'Beach day, cafes, and surfing lessons (optional).',
            type: 'Leisure'
        },
        {
            day: 'Day 7',
            title: 'Varkala to Kochi',
            description: 'Return to Kochi. Fort Kochi exploration.',
            type: 'Travel'
        },
        {
            day: 'Day 8',
            title: 'Departure',
            description: 'Fly back home with bags full of memories.',
            type: 'Travel'
        }
    ],
    inclusions: [
        'Accommodation in hotels/hostels/houseboat',
        'Breakfast on all days',
        'Internal transfers (AC Traveler/Bus)',
        'Entry fees for monuments',
        'Trip coordinator'
    ],
    exclusions: [
        'Flights/Trains to Kochi',
        'Lunch and Dinner',
        'Personal expenses',
        'Any water sports or optional activities'
    ],
    pricing: {
        trekFee: 0,
        transportationFee: 0,
        totalCostWithTransport: 0, // Will use text for custom pricing display
        totalCostWithoutTransport: 24999,
        registrationFee: 5000,
        remainingAmountWithTransport: 0,
        remainingAmountWithoutTransport: 19999,
        paymentDeadline: 'June 15, 2026'
    },
    paymentLinks: {
        fullPaymentWithTransport: '#',
        fullPaymentWithoutTransport: '#',
        registrationOnly: '#',
        remainingDuesWithTransport: '#',
        remainingDuesWithoutTransport: '#'
    },
    cancellationPolicy: [],
    transportationRoute: 'Kochi to Kochi',
    registrationLink: 'https://wa.me/917983414419?text=I%20am%20interested%20in%20Kerala%20Trip'
>>>>>>> d8790af (Added Kerala + Nag Tibba trek updates)
};
