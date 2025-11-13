import { Target, Brain, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HowItWorks = () => {
  const steps = [
    {
      icon: Target,
      heading: "Complete Your Investor Profile",
      text: "Tell us your budget, preferred areas, property type, and strategy — our AI instantly learns what you're looking for."
    },
    {
      icon: Brain,
      heading: "AI Finds the Best Deals for You",
      text: "We scan MLS, off‑market, and private developer listings daily to score and curate the best opportunities for your profile."
    },
    {
      icon: ShieldCheck,
      heading: "Review & Invest Confidently",
      text: "Receive weekly deal reports with AI‑backed analysis, verified comps, ARV, and returns so you understand exactly what you're buying."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4" style={{ color: '#0C1D36' }}>
          How It Works
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Three simple steps to start receiving AI-curated real estate deals
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {steps.map((step, idx) => (
            <div key={idx} className="text-center p-6">
              <div 
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{ backgroundColor: '#00B5B8' }}
              >
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#0C1D36' }}>
                {step.heading}
              </h3>
              <p className="text-gray-600">{step.text}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button 
            size="lg" 
            style={{ backgroundColor: '#00B5B8', color: '#FFFFFF', borderRadius: '12px' }}
            className="hover:opacity-90"
            onClick={() => window.open('https://form.jotform.com/cedricteboul/investor-profile-questionnaire', '_blank')}
          >
            Start Your Profile
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
