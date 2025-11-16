import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PropertyCard } from '@/components/PropertyCard';
import { DealModal } from '@/components/DealModal';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FeaturedDeal from '@/components/FeaturedDeal';
import { PricingSection } from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import LearnSection from '@/components/LearnSection';
import ReferEarnSection from '@/components/ReferEarnSection';
import { UserMenu } from '@/components/UserMenu';
import { properties, Property } from '@/data/properties';
import { Link } from 'react-router-dom';
import { Shield, Award, Zap } from 'lucide-react';




const AppLayout: React.FC = () => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const filteredProperties = properties.filter(p => 
    filter === 'all' || p.type === filter
  );

  const handleSubscribe = (plan: string) => {
    alert(`Subscribing to ${plan} plan! Payment integration coming soon.`);
  };

  const filterOptions = [
    { label: 'All', value: 'all' },
    { label: 'Rental', value: 'rental' },
    { label: 'Flip', value: 'flip' },
    { label: 'Multifamily', value: 'multifamily' },
    { label: 'New Construction', value: 'new-construction' }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold" style={{ color: '#0C1D36' }}>
            ABCDeals<span style={{ color: '#00B5B8' }}>.ai</span>
          </div>
          <div className="hidden md:flex gap-6 items-center">
            <a href="#home" className="text-gray-700 hover:text-[#00B5B8]">Home</a>
            <a href="#deals" className="text-gray-700 hover:text-[#00B5B8]">Deals</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-[#00B5B8]">How It Works</a>
            <a href="#pricing" className="text-gray-700 hover:text-[#00B5B8]">Pricing</a>
            <a href="#learn" className="text-gray-700 hover:text-[#00B5B8]">Learn</a>
            <a href="#contact" className="text-gray-700 hover:text-[#00B5B8]">Contact</a>
            <UserMenu />
          </div>

        </div>
      </nav>

      {/* Hero */}
      <div id="home" className="relative h-[600px] bg-cover bg-center" style={{
        backgroundImage: 'url(https://d64gsuwffb70l.cloudfront.net/68f153af05c0c020778e2996_1763041935977_53d703bf.webp)'
      }}>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(12, 29, 54, 0.9), rgba(0, 181, 184, 0.6))' }} />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-3">Find High-ROI Real Estate Deals Before Anyone Else,
              Powered by AI</h1>
<p className="text-xl mb-6">
  ABCDeals.ai scans thousands of listings every day to uncover undervalued,
        off-market, and high-potential properties matched to your budget, market,
        and strategy. — Curated by experts.
</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button 
                size="lg" 
                style={{ backgroundColor: '#00B5B8', color: '#FFFFFF', borderRadius: '12px' }}
                onClick={() => window.open('https://form.jotform.com/cedricteboul/investor-profile-questionnaire', '_blank')}
              >
                Get My First Free AI-Curated Deal
              </Button>
              <Button 
                size="lg" 
                style={{ backgroundColor: '#FFFFFF', color: '#0C1D36', borderRadius: '12px', fontWeight: '600' }}
                onClick={() => document.getElementById('weekly-report')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See Sample Report
              </Button>

            </div>
            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" style={{ color: '#00B5B8' }} />
                <span>AI scans 20,000+ listings per day</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" style={{ color: '#00B5B8' }} />
                <span>Finds below-market & high-ROI properties</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" style={{ color: '#00B5B8' }} />
                <span>Used by investors, agents & professionals</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div id="how-it-works">
        <HowItWorks />
      </div>
      
      {/* Featured Deals Section */}
      <div id="deals" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#0C1D36' }}>
            Today's Top‑Scoring Deals
          </h2>
          <p className="text-gray-600 mb-8">
            Explore high‑performing opportunities across different property types — curated by AI and verified by experts.
          </p>
          
          {/* Filter Chips */}
          <div className="flex flex-wrap gap-3 mb-8">
            {filterOptions.map(option => (
              <button
                key={option.value}
                onClick={() => setFilter(option.value)}
                className="px-4 py-2 rounded-full transition-all"
                style={{
                  backgroundColor: filter === option.value ? '#00B5B8' : '#F3F4F6',
                  color: filter === option.value ? '#FFFFFF' : '#4E5D6C'
                }}
              >
                {option.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {filteredProperties.slice(0, 3).map(p => (
              <PropertyCard key={p.id} property={p} onViewDetails={setSelectedProperty} />
            ))}
          </div>

        </div>
      </div>

      <div id="weekly-report">
        <FeaturedDeal />
      </div>

      
      
      <PricingSection />

      <FAQSection />

      <LearnSection />

      <ReferEarnSection />

      <Testimonials />


      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#0C1D36' }}>
                Built for Real Investors Who Want Smart, Data-Driven Opportunities
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                ABCDeals.ai was created to help everyday professionals invest smarter in real estate. Our AI scans thousands of listings and our analysts verify the numbers, so you can focus on choosing the right deals rather than searching endlessly.
              </p>
            </div>
            <div>
              <img 
                src="https://d64gsuwffb70l.cloudfront.net/68f153af05c0c020778e2996_1763041961774_603c6a02.webp" 
                alt="Our Team" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="py-12" style={{ backgroundColor: '#0C1D36' }}>
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold mb-4 text-white">ABCDeals.ai</h4>
            <p className="text-sm mb-2" style={{ color: '#00B5B8' }}>
              AI-Powered Real Estate, Curated for Smart Investors.
            </p>
            <p className="text-sm text-gray-400">
              Intelligent deal discovery for everyday professionals.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-[#00B5B8]">Home</a></li>
              <li><a href="#pricing" className="hover:text-[#00B5B8]">Pricing</a></li>
              <li><a href="#deals" className="hover:text-[#00B5B8]">Deals</a></li>
              <li><a href="#how-it-works" className="hover:text-[#00B5B8]">How It Works</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#learn" className="hover:text-[#00B5B8]">Learn</a></li>
              <li><a href="#refer-earn" className="hover:text-[#00B5B8]">Refer & Earn</a></li>
              <li><a href="#contact" className="hover:text-[#00B5B8]">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-[#00B5B8]">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#00B5B8]">Terms of Use</a></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          © 2025 ABCDeals.ai. All rights reserved.
        </div>
      </footer>


      <DealModal property={selectedProperty} open={!!selectedProperty} onClose={() => setSelectedProperty(null)} />
    </div>
  );
};

export default AppLayout;
