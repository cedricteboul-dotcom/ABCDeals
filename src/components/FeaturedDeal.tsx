import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const FeaturedDeal = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4" style={{ color: '#0C1D36' }}>
          Your Weekly Smart Deal Report
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Each week, get fresh AI-curated deals matched to your investor profile, complete with comps, ARV, ROI, and expert insight.

        </p>
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative">
              <img 
                src="https://d64gsuwffb70l.cloudfront.net/68f153af05c0c020778e2996_1763041937063_68a13d4b.webp" 
                alt="Featured Deal" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge style={{ backgroundColor: '#00B5B8', color: '#FFFFFF' }}>
                  This Week's Top Deal
                </Badge>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#0C1D36' }}>
                Fort Lauderdale, FL
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Asking</span>
                  <span className="font-bold" style={{ color: '#00B5B8' }}>$675,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">ARV</span>
                  <span className="font-bold" style={{ color: '#00B5B8' }}>$850,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">ROI Potential</span>
                  <span className="font-bold" style={{ color: '#C6A76D' }}>24%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">AI Deal Score</span>
                  <span className="font-bold" style={{ color: '#C6A76D' }}>92/100</span>
                </div>
              </div>
              <Button 
                className="w-full" 
                size="lg"
                style={{ backgroundColor: '#0C1D36', color: '#FFFFFF', borderRadius: '12px' }}
                onClick={() => alert('Full AI report coming soon!')}
              >
                Open Full AI Report
              </Button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDeal;
