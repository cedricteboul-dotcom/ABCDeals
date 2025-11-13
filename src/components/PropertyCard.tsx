import { Property } from '@/data/properties';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Bed, Bath, Maximize, Heart } from 'lucide-react';
import { useAppContext } from '@/contexts/AppContext';

interface PropertyCardProps {
  property: Property;
  onViewDetails: (property: Property) => void;
}

export const PropertyCard = ({ property, onViewDetails }: PropertyCardProps) => {
  const { favoriteDealIds, toggleFavorite } = useAppContext();
  const isFavorite = favoriteDealIds.includes(property.id);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative">
        <img src={property.image} alt={property.title} className="w-full h-56 object-cover" />
        <div className="absolute top-3 left-3 flex gap-2">
          {property.aiScore && (
            <Badge style={{ backgroundColor: '#00B5B8', color: '#FFFFFF' }}>
              AI Score: {property.aiScore}
            </Badge>
          )}
          {property.belowMarket && (
            <Badge style={{ backgroundColor: '#C6A76D', color: '#FFFFFF' }}>
              Below Market
            </Badge>
          )}
        </div>
        <div className="absolute top-3 right-3 flex gap-2">
          {property.expertVerified && (
            <Badge style={{ backgroundColor: '#0C1D36', color: '#FFFFFF' }}>
              Verified by Expert
            </Badge>
          )}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(property.id);
            }}
            className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
          >
            <Heart
              className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
            />
          </button>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold mb-2" style={{ color: '#0C1D36' }}>{property.title}</h3>
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>
        <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
          {property.bedrooms > 0 && (
            <div className="flex items-center">
              <Bed className="w-4 h-4 mr-1" />
              {property.bedrooms}
            </div>
          )}
          {property.bathrooms > 0 && (
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-1" />
              {property.bathrooms}
            </div>
          )}
          <div className="flex items-center">
            <Maximize className="w-4 h-4 mr-1" />
            {property.sqft.toLocaleString()} sqft
          </div>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-2xl font-bold" style={{ color: '#00B5B8' }}>
              ${(property.price / 1000).toFixed(0)}K
            </p>
            <p className="text-sm text-gray-500">ROI: {property.roi}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Cap Rate</p>
            <p className="font-bold" style={{ color: '#C6A76D' }}>{property.capRate}</p>
          </div>
        </div>
        <Button 
          className="w-full" 
          style={{ backgroundColor: '#0C1D36', color: '#FFFFFF', borderRadius: '12px' }}
          onClick={() => onViewDetails(property)}
        >
          Open Deal Insights
        </Button>
      </div>
    </div>
  );
};
