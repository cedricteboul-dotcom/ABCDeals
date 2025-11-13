import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { User } from '@supabase/supabase-js';
import { toast } from '@/components/ui/use-toast';

interface UserProfile {
  id: string;
  email: string;
  full_name?: string;
  phone?: string;
  budget_min?: number;
  budget_max?: number;
  preferred_areas?: string[];
  property_types?: string[];
  investment_strategy?: string;
}

interface AppContextType {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  user: User | null;
  userProfile: UserProfile | null;
  loading: boolean;
  signOut: () => Promise<void>;
  refreshProfile: () => Promise<void>;
  favoriteDealIds: string[];
  toggleFavorite: (propertyId: string) => Promise<void>;
  viewedPropertyIds: string[];
  markAsViewed: (propertyId: string) => Promise<void>;
}

const defaultAppContext: AppContextType = {
  sidebarOpen: false,
  toggleSidebar: () => {},
  user: null,
  userProfile: null,
  loading: true,
  signOut: async () => {},
  refreshProfile: async () => {},
  favoriteDealIds: [],
  toggleFavorite: async () => {},
  viewedPropertyIds: [],
  markAsViewed: async () => {},
};

const AppContext = createContext<AppContextType>(defaultAppContext);

export const useAppContext = () => useContext(AppContext);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [favoriteDealIds, setFavoriteDealIds] = useState<string[]>([]);
  const [viewedPropertyIds, setViewedPropertyIds] = useState<string[]>([]);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  const fetchProfile = async (userId: string) => {
    const { data } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('id', userId)
      .single();
    
    if (data) {
      setUserProfile(data);
    }
  };

  const fetchFavorites = async (userId: string) => {
    const { data } = await supabase
      .from('favorite_deals')
      .select('property_id')
      .eq('user_id', userId);
    
    if (data) {
      setFavoriteDealIds(data.map(f => f.property_id));
    }
  };

  const fetchViewed = async (userId: string) => {
    const { data } = await supabase
      .from('viewed_properties')
      .select('property_id')
      .eq('user_id', userId);
    
    if (data) {
      setViewedPropertyIds(data.map(v => v.property_id));
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchProfile(session.user.id);
        fetchFavorites(session.user.id);
        fetchViewed(session.user.id);
      }
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchProfile(session.user.id);
        fetchFavorites(session.user.id);
        fetchViewed(session.user.id);
      } else {
        setUserProfile(null);
        setFavoriteDealIds([]);
        setViewedPropertyIds([]);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
    toast({ title: 'Signed out successfully' });
  };

  const refreshProfile = async () => {
    if (user) {
      await fetchProfile(user.id);
    }
  };

  const toggleFavorite = async (propertyId: string) => {
    if (!user) {
      toast({ title: 'Please sign in to save favorites', variant: 'destructive' });
      return;
    }

    const isFavorite = favoriteDealIds.includes(propertyId);

    if (isFavorite) {
      await supabase
        .from('favorite_deals')
        .delete()
        .eq('user_id', user.id)
        .eq('property_id', propertyId);
      setFavoriteDealIds(prev => prev.filter(id => id !== propertyId));
      toast({ title: 'Removed from favorites' });
    } else {
      await supabase
        .from('favorite_deals')
        .insert({ user_id: user.id, property_id: propertyId });
      setFavoriteDealIds(prev => [...prev, propertyId]);
      toast({ title: 'Added to favorites' });
    }
  };

  const markAsViewed = async (propertyId: string) => {
    if (!user || viewedPropertyIds.includes(propertyId)) return;

    await supabase
      .from('viewed_properties')
      .insert({ user_id: user.id, property_id: propertyId });
    setViewedPropertyIds(prev => [...prev, propertyId]);
  };

  return (
    <AppContext.Provider
      value={{
        sidebarOpen,
        toggleSidebar,
        user,
        userProfile,
        loading,
        signOut,
        refreshProfile,
        favoriteDealIds,
        toggleFavorite,
        viewedPropertyIds,
        markAsViewed,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
