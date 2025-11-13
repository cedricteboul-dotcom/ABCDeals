import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { X, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ComparisonModalProps {
  open: boolean;
  onClose: () => void;
}

export const ComparisonModal = ({ open, onClose }: ComparisonModalProps) => {
  const features = [
    { name: 'AI-Curated Deals', starter: '1/week', pro: '5/week', unlimited: 'Unlimited', realtor: 'Unlimited' },
    { name: 'Full Deal Analytics (ROI, ARV, comps)', starter: false, pro: true, unlimited: true, realtor: true },
    { name: 'Early Access to Deals', starter: false, pro: true, unlimited: true, realtor: true },
    { name: 'Investor Profiles', starter: '1', pro: '3', unlimited: 'Unlimited', realtor: 'Up to 10 client profiles' },
    { name: 'Text Alerts (Below-Market Deals)', starter: false, pro: false, unlimited: true, realtor: true },
    { name: 'AI Market Intelligence Report', starter: false, pro: false, unlimited: true, realtor: true },
    { name: 'Priority Deal Requests (Custom Search)', starter: false, pro: false, unlimited: true, realtor: true },
    { name: 'Analyst Chat (24-48h)', starter: false, pro: false, unlimited: true, realtor: true },
    { name: 'Monthly Strategy Call', starter: false, pro: false, unlimited: true, realtor: false },
    { name: 'Access to Workshops', starter: false, pro: false, unlimited: true, realtor: true },
    { name: 'Co-Branded Deal Reports', starter: false, pro: false, unlimited: false, realtor: true },
    { name: 'Client AI Newsletters', starter: false, pro: false, unlimited: false, realtor: true },
    { name: 'Priority Support', starter: false, pro: true, unlimited: true, realtor: true }
  ];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold" style={{ color: '#0C1D36' }}>Compare Plans</DialogTitle>
        </DialogHeader>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2" style={{ borderColor: '#0C1D36' }}>
                <th className="text-left p-3 font-bold">Features</th>
                <th className="text-center p-3 font-bold">Starter</th>
                <th className="text-center p-3 font-bold">Professional</th>
                <th className="text-center p-3 font-bold">Unlimited</th>
                <th className="text-center p-3 font-bold">Realtor Pro</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr key={idx} className="border-b">
                  <td className="p-3 text-gray-700">{feature.name}</td>
                  <td className="text-center p-3">
                    {typeof feature.starter === 'boolean' ? (
                      feature.starter ? <Check className="w-5 h-5 mx-auto" style={{ color: '#00B5B8' }} /> : <X className="w-5 h-5 mx-auto text-gray-300" />
                    ) : feature.starter}
                  </td>
                  <td className="text-center p-3">
                    {typeof feature.pro === 'boolean' ? (
                      feature.pro ? <Check className="w-5 h-5 mx-auto" style={{ color: '#00B5B8' }} /> : <X className="w-5 h-5 mx-auto text-gray-300" />
                    ) : feature.pro}
                  </td>
                  <td className="text-center p-3">
                    {typeof feature.unlimited === 'boolean' ? (
                      feature.unlimited ? <Check className="w-5 h-5 mx-auto" style={{ color: '#00B5B8' }} /> : <X className="w-5 h-5 mx-auto text-gray-300" />
                    ) : feature.unlimited}
                  </td>
                  <td className="text-center p-3">
                    {typeof feature.realtor === 'boolean' ? (
                      feature.realtor ? <Check className="w-5 h-5 mx-auto" style={{ color: '#00B5B8' }} /> : <X className="w-5 h-5 mx-auto text-gray-300" />
                    ) : feature.realtor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end mt-4">
          <Button onClick={onClose} style={{ backgroundColor: '#0C1D36', color: '#FFFFFF', borderRadius: '12px' }}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
