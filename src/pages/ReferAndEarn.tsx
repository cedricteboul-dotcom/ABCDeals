import { Button } from '@/components/ui/button';
import { Gift, Users, DollarSign } from 'lucide-react';
import { useState } from 'react';

export default function ReferAndEarn() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <Gift className="w-16 h-16 mx-auto mb-6 text-blue-600" />
          <h1 className="text-5xl font-bold mb-4 text-gray-900">Invite Friends. You Both Earn $25.</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Share your unique referral link with friends, colleagues, or investors. 
            When they join a paid plan, you both receive $25 credit toward your next month's membership or consulting.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">How It Works</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Get Your Link</h3>
                <p className="text-gray-600">Click the button below to generate your unique referral link.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Share with Friends</h3>
                <p className="text-gray-600">Send your link via email, social media, or any channel you prefer.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Earn Rewards</h3>
                <p className="text-gray-600">When they subscribe to a paid plan, you both get $25 credit instantly.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-lg px-8 py-6"
            onClick={() => setShowModal(true)}
          >
            Get My Referral Link
          </Button>
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl p-8 max-w-md w-full">
              <h3 className="text-2xl font-bold mb-4">Coming Soon!</h3>
              <p className="text-gray-600 mb-6">
                Our referral program is launching soon. Sign up for our newsletter to be notified when it's ready.
              </p>
              <Button 
                className="w-full"
                onClick={() => setShowModal(false)}
              >
                Got It
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
