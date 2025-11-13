import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import { ComparisonModal } from './ComparisonModal';

interface PricingTier {
  name: string;
  price: string;
  subtitle: string;
  features: string[];
  cta: string;
  badge?: string;
  highlighted?: boolean;
}

export const PricingSection = () => {
  const [showComparison, setShowComparison] = useState(false);

  const tiers: PricingTier[] = [
    {
      name: 'Starter Access',
      price: '$0',
      subtitle: 'Perfect for first-time investors curious about AI-curated deals.',
      features: [
        '1 AI-curated deal per week',
        'Basic deal analytics',
        'Email delivery',
        '1 investor profile',
        'Save favorite deals',
        'Access to free learning guides'
      ],
      cta: 'Start Free'
    },
    {
      name: 'Professional Access',
      price: '$99',
      subtitle: 'Ideal for busy professionals: doctors, lawyers, entrepreneurs.',
      badge: 'Most Popular',
      highlighted: true,
      features: [
        'Everything in Starter, plus:',
        '5 curated deals per week',
        'Full analytics (comps, ARV, ROI, rent estimates)',
        'Early access to new deals',
        'Priority email support',
        'Up to 3 investor profiles',
        'Area tracking & alerts',
        'Save deals & create shortlists'
      ],
      cta: 'Upgrade to Professional'
    },
    {
      name: 'Unlimited Investor',
      price: '$349',
      subtitle: 'For serious investors who want concierge-level deal discovery.',
      highlighted: true,
      features: [
        'Everything in Professional, plus:',
        'Unlimited AI-curated deals',
        'Weekly AI Market Intelligence Report',
        'Text alerts for below-market deals',
        'Priority Deal Requests (custom searches)',
        'Private Analyst Chat (24-48h response)',
        'Free monthly 1:1 strategy call',
        'Early access to off-market opportunities',
        'Unlimited investor profiles',
        'Access to all workshops & masterclasses'
      ],
      cta: 'Become an Unlimited Investor'
    },
    {
      name: 'Realtor Pro',
      price: '$399',
      subtitle: 'For agents who want to generate more investor clients.',
      features: [
        'Manage up to 10 client profiles',
        'Weekly co-branded AI deal reports',
        'Client AI newsletters with agent branding',
        'Agent-branded property analysis pages',
        'Lead capture modules',
        'Early access to all new deals',
        'Realtor analytics dashboard',
        'Email/WhatsApp templates',
        'Priority agent support'
      ],
      cta: 'Join Realtor Pro'
    }
  ];

  return (
    <>
      <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ color: '#0C1D36' }}>
            Choose Your Access Level
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Cancel anytime. Upgrade as your portfolio grows.
          </p>
          <div className="text-center mb-12">
            <button 
              onClick={() => setShowComparison(true)}
              className="text-sm underline hover:no-underline"
              style={{ color: '#00B5B8' }}
            >
              Compare Plans
            </button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {tiers.map((tier, idx) => (
              <div 
                key={idx}
                className={`rounded-xl p-6 bg-white relative ${tier.highlighted ? 'shadow-2xl border-2' : 'shadow-lg'}`}
                style={tier.highlighted ? { borderColor: '#00B5B8' } : {}}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge style={{ backgroundColor: '#C6A76D', color: '#FFFFFF', padding: '4px 12px' }}>
                      {tier.badge}
                    </Badge>
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2" style={{ color: '#0C1D36' }}>{tier.name}</h3>
                <div className="mb-3">
                  <span className="text-4xl font-bold" style={{ color: '#00B5B8' }}>{tier.price}</span>
                  <span className="text-gray-600">/mo</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">{tier.subtitle}</p>
                <ul className="space-y-2 mb-6 min-h-[280px]">
                  {tier.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start text-sm">
                      <Check className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" style={{ color: '#00B5B8' }} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full" 
                  style={{ 
                    backgroundColor: tier.highlighted ? '#00B5B8' : '#0C1D36', 
                    color: '#FFFFFF',
                    borderRadius: '12px'
                  }}
                  onClick={() => alert(`Subscribing to ${tier.name}! Payment integration coming soon.`)}
                >
                  {tier.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ComparisonModal open={showComparison} onClose={() => setShowComparison(false)} />
    </>
  );
};
