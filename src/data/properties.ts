export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  image: string;
  roi: string;
  capRate: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  type: 'flip' | 'rental' | 'multifamily' | 'new-construction';
  strategy: string;
  featured: boolean;
  aiScore?: number;
  belowMarket?: boolean;
  expertVerified?: boolean;
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'Luxury Waterfront Estate',
    location: 'Miami Beach, FL',
    price: 3450000,
    image: 'https://d64gsuwffb70l.cloudfront.net/68f153af05c0c020778e2996_1763041937063_68a13d4b.webp',
    roi: '18%',
    capRate: '5.8%',
    bedrooms: 6,
    bathrooms: 5,
    sqft: 6200,
    type: 'rental',
    strategy: 'Luxury Short-Term Rental',
    featured: true,
    aiScore: 94,
    belowMarket: true,
    expertVerified: true
  },
  {
    id: '2',
    title: 'Downtown Modern Condo',
    location: 'Fort Lauderdale, FL',
    price: 675000,
    image: 'https://d64gsuwffb70l.cloudfront.net/68f153af05c0c020778e2996_1763041939179_e34ffff0.webp',
    roi: '24%',
    capRate: '7.5%',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1400,
    type: 'rental',
    strategy: 'High Rental Demand Area',
    featured: true,
    aiScore: 92,
    belowMarket: true,
    expertVerified: true
  },
  {
    id: '3',
    title: 'Suburban Family Home',
    location: 'Coral Springs, FL',
    price: 1250000,
    image: 'https://d64gsuwffb70l.cloudfront.net/68f153af05c0c020778e2996_1763041941253_34fcae97.webp',
    roi: '22%',
    capRate: '6.8%',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3200,
    type: 'flip',
    strategy: 'Cosmetic Updates & Flip',
    featured: true,
    aiScore: 89,
    belowMarket: false,
    expertVerified: true
  },
  {
    id: '4',
    title: 'Modern Townhouse',
    location: 'West Palm Beach, FL',
    price: 625000,
    image: 'https://d64gsuwffb70l.cloudfront.net/68f153af05c0c020778e2996_1763041943232_25ecc62d.webp',
    roi: '32%',
    capRate: '8.1%',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1850,
    type: 'flip',
    strategy: 'Quick Flip - High Demand',
    featured: false,
    aiScore: 91,
    belowMarket: true,
    expertVerified: true
  },
  {
    id: '5',
    title: 'Beachfront Condo',
    location: 'Sunny Isles, FL',
    price: 980000,
    image: 'https://d64gsuwffb70l.cloudfront.net/68f153af05c0c020778e2996_1763041944224_9b9f4308.webp',
    roi: '20%',
    capRate: '6.5%',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1600,
    type: 'rental',
    strategy: 'Vacation Rental',
    featured: false,
    aiScore: 88,
    belowMarket: false,
    expertVerified: true
  },
  {
    id: '6',
    title: 'New Construction Development',
    location: 'Delray Beach, FL',
    price: 450000,
    image: 'https://d64gsuwffb70l.cloudfront.net/68f153af05c0c020778e2996_1763041956850_dda8b9e0.webp',
    roi: '45%',
    capRate: 'N/A',
    bedrooms: 0,
    bathrooms: 0,
    sqft: 8500,
    type: 'new-construction',
    strategy: 'Build 2 Units - Zoning Approved',
    featured: false,
    aiScore: 95,
    belowMarket: true,
    expertVerified: true
  },
  {
    id: '7',
    title: 'Renovated Bungalow',
    location: 'Pompano Beach, FL',
    price: 395000,
    image: 'https://d64gsuwffb70l.cloudfront.net/68f153af05c0c020778e2996_1763041946203_64960b0e.webp',
    roi: '35%',
    capRate: '9.2%',
    bedrooms: 2,
    bathrooms: 1,
    sqft: 1200,
    type: 'rental',
    strategy: 'Cash Flow Machine',
    featured: false,
    aiScore: 90,
    belowMarket: true,
    expertVerified: true
  },
  {
    id: '8',
    title: 'Luxury Estate',
    location: 'Coral Gables, FL',
    price: 2100000,
    image: 'https://d64gsuwffb70l.cloudfront.net/68f153af05c0c020778e2996_1763041948183_e726b000.webp',
    roi: '15%',
    capRate: '5.2%',
    bedrooms: 6,
    bathrooms: 5,
    sqft: 5800,
    type: 'rental',
    strategy: 'High-End Executive Rental',
    featured: false,
    aiScore: 87,
    belowMarket: false,
    expertVerified: true
  },
  {
    id: '9',
    title: 'Distressed Flip Opportunity',
    location: 'Hollywood, FL',
    price: 285000,
    image: 'https://d64gsuwffb70l.cloudfront.net/68f153af05c0c020778e2996_1763041950210_7b6633e5.webp',
    roi: '42%',
    capRate: '10.5%',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1450,
    type: 'flip',
    strategy: 'Deep Value - $60K Reno',
    featured: false,
    aiScore: 93,
    belowMarket: true,
    expertVerified: true
  },
  {
    id: '10',
    title: 'Multi-Family Investment',
    location: 'Boca Raton, FL',
    price: 1850000,
    image: 'https://d64gsuwffb70l.cloudfront.net/68f153af05c0c020778e2996_1763041958871_59817d8c.webp',
    roi: '28%',
    capRate: '7.8%',
    bedrooms: 8,
    bathrooms: 6,
    sqft: 4500,
    type: 'multifamily',
    strategy: '4-Unit Property - Strong Cash Flow',
    featured: false,
    aiScore: 92,
    belowMarket: true,
    expertVerified: true
  },
  {
    id: '11',
    title: 'Urban Loft Conversion',
    location: 'Miami, FL',
    price: 825000,
    image: 'https://d64gsuwffb70l.cloudfront.net/68f153af05c0c020778e2996_1763041960849_ed66c7bb.webp',
    roi: '26%',
    capRate: '7.2%',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1800,
    type: 'rental',
    strategy: 'Modern Urban Living',
    featured: false,
    aiScore: 88,
    belowMarket: false,
    expertVerified: true
  }
];
