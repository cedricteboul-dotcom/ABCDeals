import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  features: string[];
  onSubscribe: () => void;
  highlighted?: boolean;
  badge?: string;
}

export const PricingCard = ({ title, price, period, features, onSubscribe, highlighted, badge }: PricingCardProps) => {
  return (
    <div 
      className={`rounded-xl p-8 ${highlighted ? 'shadow-2xl scale-105' : 'shadow-lg'} bg-white relative`}
      style={highlighted ? { border: '2px solid #00B5B8' } : {}}
    >
      {badge && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <Badge style={{ backgroundColor: '#C6A76D', color: '#FFFFFF', padding: '4px 16px' }}>
            {badge}
          </Badge>
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2" style={{ color: '#0C1D36' }}>{title}</h3>
      <div className="mb-6">
        <span className="text-5xl font-bold" style={{ color: '#00B5B8' }}>{price}</span>
        <span className="text-gray-600">/{period}</span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <Check className="w-5 h-5 mr-2 flex-shrink-0" style={{ color: '#00B5B8' }} />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        className="w-full" 
        size="lg"
        style={{ 
          backgroundColor: highlighted ? '#00B5B8' : '#0C1D36', 
          color: '#FFFFFF',
          borderRadius: '12px'
        }}
        onClick={onSubscribe}
      >
        {price === '$0' ? 'Subscribe Free' : 'Subscribe Now'}
      </Button>
    </div>
  );
};
