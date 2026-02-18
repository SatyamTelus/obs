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
};
