import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Property } from '@/data/properties';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Bed, Bath, Maximize, TrendingUp, DollarSign, Calculator } from 'lucide-react';

interface DealModalProps {
  property: Property | null;
  open: boolean;
  onClose: () => void;
}

export const DealModal = ({ property, open, onClose }: DealModalProps) => {
  if (!property) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{property.title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <img src={property.image} alt={property.title} className="w-full h-64 object-cover rounded-lg"/>
          <div className="flex gap-2">
            <Badge className="bg-blue-600">{property.type}</Badge>
            {property.featured && <Badge className="bg-yellow-500">Featured</Badge>}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Property Details</h4>
              <p className="text-sm text-gray-600 mb-1">{property.location}</p>
              {property.bedrooms > 0 && (
                <div className="flex gap-3 text-sm">
                  <span className="flex items-center gap-1"><Bed size={16}/>{property.bedrooms} bed</span>
                  <span className="flex items-center gap-1"><Bath size={16}/>{property.bathrooms} bath</span>
                  <span className="flex items-center gap-1"><Maximize size={16}/>{property.sqft} sqft</span>
                </div>
              )}
            </div>
            <div>
              <h4 className="font-semibold mb-2">Investment Metrics</h4>
              <div className="space-y-1 text-sm">
                <p className="flex items-center gap-2"><DollarSign size={16}/> Price: ${property.price.toLocaleString()}</p>
                <p className="flex items-center gap-2"><TrendingUp size={16}/> ROI: {property.roi}</p>
                {property.capRate !== 'N/A' && <p className="flex items-center gap-2"><Calculator size={16}/> Cap Rate: {property.capRate}</p>}
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <TrendingUp className="text-blue-600"/> AI Strategy Recommendation
            </h4>
            <p className="text-sm">{property.strategy}</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold mb-2 text-green-800">Full Report Card Includes:</h4>
            <ul className="text-sm space-y-1 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span>3 comparable properties sold within the last year (when available)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span>Suggested purchase price based on market analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span>Expert recommendations on investment strategy and potential improvements</span>
              </li>
            </ul>
          </div>

          <div className="flex gap-3">
            <Button className="flex-1 bg-blue-600 hover:bg-blue-700">Request Full Report</Button>
            <Button variant="outline" className="flex-1">Save to Favorites</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
