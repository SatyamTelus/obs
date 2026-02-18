// Placeholder images – replace with Nagtibba trek images when available
import placeholder1 from '../bhramtal/bhrama_1.png';
import placeholder2 from '../bhramtal/bhrama_2.png';
import placeholder3 from '../bhramtal/bhrama_3.png';
import nagtibbaBrochure from './NAGTIBBA Trek Brochure.pdf';
import type { TrekData } from '../TrekData';

export const nagtibbaData: TrekData = {
  id: 'nagtibba',
  title: 'Nagtibba Trek - Oh-Bhaisahab Experience',
  date: 'April 3-5, 2026',
  duration: '3 Days / 2 Nights',
  difficulty: 'Easy',
  location: 'Garhwal Himalayas, Uttarakhand',
  images: [placeholder1, placeholder2, placeholder3],
  brochure: nagtibbaBrochure,
  description:
    'A perfect weekend trek to Nagtibba with stunning Himalayan views. This all-girls trip is designed for women who want to explore the mountains in a supportive, fun group. Dehradun to Dehradun package includes transport. Pay ₹1,500 now and ₹4,000 by 15 March.',
  highlights: [
    'All girls trip – women-only group',
    'Nagtibba summit views',
    'Dehradun to Dehradun: ₹5,500 (₹1,500 now, ₹4,000 by 15 March)',
    'Special Pilani to Pilani package – call for details',
    'Short and beginner-friendly',
  ],
  itinerary: [
    {
      day: 'Day 1',
      title: 'Dehradun → Pantwari / Trek to camp',
      description: 'Drive to base and trek to first campsite',
      type: 'Travel',
    },
    {
      day: 'Day 2',
      title: 'Trek to Nagtibba summit',
      description: 'Summit day with panoramic Himalayan views',
      type: 'Trek',
    },
    {
      day: 'Day 3',
      title: 'Descent and return to Dehradun',
      description: 'Trek down and drive back to Dehradun',
      type: 'Trek',
    },
  ],
  inclusions: [
    'Stay for 2 nights',
    'All meals during the trek',
    'Transportation (Dehradun to Dehradun)',
    'Trek guide and support',
    'Permits and fees',
  ],
  exclusions: [
    'Personal expenses',
    'Anything not listed in inclusions',
  ],
  pricing: {
    trekFee: 5500,
    transportationFee: 0,
    totalCostWithTransport: 5500,
    totalCostWithoutTransport: 0,
    registrationFee: 1500,
    remainingAmountWithTransport: 4000,
    remainingAmountWithoutTransport: 0,
    paymentDeadline: '15 March',
  },
  paymentLinks: {
    fullPaymentWithTransport: '#',
    fullPaymentWithoutTransport: '#',
    registrationOnly: '#',
    remainingDuesWithTransport: '#',
    remainingDuesWithoutTransport: '#',
  },
  cancellationPolicy: [],
  transportationRoute: 'Dehradun to Dehradun',
  allGirlsTrip: true,
  specialPackageNote: 'Pilani to Pilani package',
  specialPackagePhone: '7983414419',
};
