import { useState } from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { User, Heart, Eye, Settings, LogOut } from 'lucide-react';
import { AuthModal } from './auth/AuthModal';

export function UserMenu() {
  const { user, signOut } = useAppContext();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authView, setAuthView] = useState<'login' | 'signup'>('login');

  if (!user) {
    return (
      <>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => {
              setAuthView('login');
              setAuthModalOpen(true);
            }}
            style={{ borderColor: '#0C1D36', color: '#0C1D36', borderRadius: '12px' }}
          >
            Sign In
          </Button>
          <Button
            onClick={() => {
              setAuthView('signup');
              setAuthModalOpen(true);
            }}
            style={{ backgroundColor: '#00B5B8', color: '#FFFFFF', borderRadius: '12px' }}
          >
            Sign Up
          </Button>
        </div>
        <AuthModal
          isOpen={authModalOpen}
          onClose={() => setAuthModalOpen(false)}
          defaultView={authView}
        />
      </>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2"
          style={{ borderColor: '#0C1D36', color: '#0C1D36', borderRadius: '12px' }}
        >
          <User className="w-4 h-4" />
          <span className="hidden md:inline">Account</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>
          <div className="flex flex-col">
            <span className="font-semibold">{user.email}</span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <Heart className="w-4 h-4 mr-2" />
          Favorite Deals
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <Eye className="w-4 h-4 mr-2" />
          Viewed Properties
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <Settings className="w-4 h-4 mr-2" />
          Profile Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={signOut} className="cursor-pointer text-red-600">
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
