import React from 'react';
import { Button } from '@/components/ui/button';
import { GraduationCap, Calendar } from 'lucide-react';

const LearnSection: React.FC = () => {
  return (
    <section id="learn" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6">
          <GraduationCap className="w-16 h-16 mx-auto mb-4" style={{ color: '#00B5B8' }} />
        </div>
        <h2 className="text-4xl font-bold mb-6" style={{ color: '#0C1D36' }}>
          Classes Coming Soon
        </h2>
        <p className="text-lg text-gray-700 mb-4 max-w-2xl mx-auto">
          We're building a series of classes to help you understand Florida real estate values, returns, and market dynamics.
        </p>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          In the meantime, you can book a 1-on-1 strategy call to get personalized guidance and answers to your investment questions.
        </p>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto mb-8">
          <Calendar className="w-12 h-12 mx-auto mb-4" style={{ color: '#00B5B8' }} />
          <h3 className="text-2xl font-bold mb-2" style={{ color: '#0C1D36' }}>
            1-on-1 Strategy Call
          </h3>
          <p className="text-3xl font-bold mb-2" style={{ color: '#00B5B8' }}>
            $49
          </p>
          <p className="text-sm text-gray-600 mb-6">
            Fully credited toward any membership upgrade
          </p>
          <Button 
            size="lg" 
            className="w-full"
            style={{ backgroundColor: '#00B5B8', color: '#FFFFFF', borderRadius: '12px' }}
            onClick={() => window.open('https://calendly.com/your-booking-link', '_blank')}
          >
            Book 1:1 Strategy Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LearnSection;
