import { Badge } from '@/components/ui/badge';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "As a physician, I don't have time to study markets — ABCDeals sends me 3 solid options a week I can actually act on.",
      author: "Dr. Alex B.",
      location: "Miami"
    },
    {
      quote: "The AI deal scores helped me buy my first duplex with confidence.",
      author: "Olivia S.",
      location: "Toronto"
    },
    {
      quote: "Finally, a platform that simplifies investing for working professionals.",
      author: "David R.",
      location: "New York"
    }
  ];

  const badges = [
    "20+ Years of Real Estate Expertise",
    "Verified Partner Network",
    "AI‑Driven Insights"
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#0C1D36' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Trusted by Professionals, Backed by Data
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Join hundreds of busy professionals who trust ABCDeals.ai for their investment decisions
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-white mb-4 italic">"{testimonial.quote}"</p>
              <div className="text-sm">
                <p className="font-bold" style={{ color: '#00B5B8' }}>{testimonial.author}</p>
                <p className="text-gray-300">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {badges.map((badge, idx) => (
            <Badge 
              key={idx} 
              style={{ backgroundColor: '#00B5B8', color: '#FFFFFF', padding: '8px 16px', fontSize: '14px' }}
            >
              {badge}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
