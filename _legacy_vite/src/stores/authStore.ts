// Store: Auth State Management (Zustand)
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { supabase } from '@lib/supabase';
import type { User } from '@types/index';

interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  
  // Actions
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isLoading: true,
      isAuthenticated: false,
      
      setUser: (user) => {
        set({ 
          user, 
          isAuthenticated: !!user,
          isLoading: false 
        });
      },
      
      setLoading: (loading) => {
        set({ isLoading: loading });
      },
      
      logout: async () => {
        await supabase.auth.signOut();
        set({ 
          user: null, 
          isAuthenticated: false 
        });
      },
      
      refreshUser: async () => {
        try {
          const { data: { user: authUser } } = await supabase.auth.getUser();
          
          if (authUser) {
            // Fetch additional user data from your users table
            const { data: userData } = await supabase
              .from('users')
              .select('*')
              .eq('id', authUser.id)
              .single();
            
            set({
              user: userData,
              isAuthenticated: true,
              isLoading: false,
            });
          } else {
            set({
              user: null,
              isAuthenticated: false,
              isLoading: false,
            });
          }
        } catch (error) {
          console.error('Error refreshing user:', error);
          set({ isLoading: false });
        }
      },
    }),
    {
      name: 'facestore-auth',
      partialize: (state) => ({ 
        user: state.user,
        isAuthenticated: state.isAuthenticated 
      }),
    }
  )
);
