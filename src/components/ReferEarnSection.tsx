import React from 'react';
import { Button } from '@/components/ui/button';
import { Users, Gift, TrendingUp } from 'lucide-react';

const ReferEarnSection: React.FC = () => {
  return (
    <section id="refer-earn" className="py-20" style={{ background: 'linear-gradient(135deg, #0C1D36 0%, #00B5B8 100%)' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Gift className="w-16 h-16 mx-auto mb-4 text-white" />
          <h2 className="text-4xl font-bold mb-4 text-white">
            Refer & Earn
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Know investors or agents who would benefit from AI-curated deals? Refer them to ABCDeals.ai and earn credits toward your membership for every successful signup.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Users className="w-10 h-10 mx-auto mb-3 text-white" />
            <h3 className="text-lg font-semibold text-white mb-2">Share with Friends</h3>
            <p className="text-white/80 text-sm">Send your unique referral link to investors and agents</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <TrendingUp className="w-10 h-10 mx-auto mb-3 text-white" />
            <h3 className="text-lg font-semibold text-white mb-2">They Sign Up</h3>
            <p className="text-white/80 text-sm">When they join a paid plan, you earn credits</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Gift className="w-10 h-10 mx-auto mb-3 text-white" />
            <h3 className="text-lg font-semibold text-white mb-2">Get Rewarded</h3>
            <p className="text-white/80 text-sm">Apply credits to your membership or cash out</p>
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-white hover:bg-gray-100"
            style={{ color: '#0C1D36', borderRadius: '12px' }}
            onClick={() => window.open('https://form.jotform.com/your-referral-form', '_blank')}
          >
            Start Referring
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReferEarnSection;
