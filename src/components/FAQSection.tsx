import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "Is there any long-term commitment or contract?",
      answer: "No. All plans are month-to-month. You can upgrade, downgrade, or cancel anytime — there is no long-term contract."
    },
    {
      question: "Do I keep full ownership and control of my investments?",
      answer: "Yes. ABCDeals.ai does not hold your funds or buy properties on your behalf. We provide data, analysis, and curated opportunities — you always choose if, when, and how to invest."
    },
    {
      question: "Is this financial advice or a regulated investment service?",
      answer: "No. We provide information, analysis, and educational resources to help you make more informed decisions. We do not provide personalized financial, legal, or tax advice. You should consult your own advisors before making any investment."
    },
    {
      question: "Can I try the platform before paying?",
      answer: "Yes. Our Starter Access plan is free and lets you receive 1 AI-curated deal per week so you can see how the platform works before upgrading."
    },
    {
      question: "What makes ABCDeals.ai different from just using Zillow or public portals?",
      answer: "Traditional portals show listings. ABCDeals.ai uses AI and expert review to pre-analyze opportunities, estimate returns, compare comps, and highlight which properties look most attractive as investments based on your profile."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#0C1D36' }}>
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold" style={{ color: '#0C1D36' }}>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
