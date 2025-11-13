import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { LoginForm } from './LoginForm';
import { SignupForm } from './SignupForm';
import { PasswordResetForm } from './PasswordResetForm';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultView?: 'login' | 'signup';
}

export function AuthModal({ isOpen, onClose, defaultView = 'login' }: AuthModalProps) {
  const [view, setView] = useState<'login' | 'signup' | 'reset'>(defaultView);

  const handleSuccess = () => {
    onClose();
    setView('login');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {view === 'login' && 'Sign In to ABCDeals.ai'}
            {view === 'signup' && 'Create Your Account'}
            {view === 'reset' && 'Reset Password'}
          </DialogTitle>
        </DialogHeader>
        {view === 'login' && (
          <LoginForm
            onSuccess={handleSuccess}
            onSwitchToSignup={() => setView('signup')}
            onSwitchToReset={() => setView('reset')}
          />
        )}
        {view === 'signup' && (
          <SignupForm
            onSuccess={handleSuccess}
            onSwitchToLogin={() => setView('login')}
          />
        )}
        {view === 'reset' && (
          <PasswordResetForm onBack={() => setView('login')} />
        )}
      </DialogContent>
    </Dialog>
  );
}
