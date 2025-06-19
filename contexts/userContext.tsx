import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import {
  saveUserPreferences,
  loadUserPreferences,
  type UserPreferences
} from '@/lib/userPreferences';

interface User {
  id: string;
  name: string;
  email: string;
  preferences?: UserPreferences;
}

interface UserContextProps {
  user: User | null;
  setUser: (user: User | null) => void;
  language: string;
  setLanguage: (language: string) => void;
  saveLanguagePreference: (language: string) => void;
  loadUserPreferencesFromBackend: (userId: string) => Promise<void>;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [language, setLanguageState] = useState<string>('en');

  // Initialize language from localStorage or default to English
  useEffect(() => {
    const savedLanguage = localStorage.getItem('user-language');
    const initialLanguage = savedLanguage || 'en';

    setLanguageState(initialLanguage);
  }, []);

  const setLanguage = (newLanguage: string) => {
    setLanguageState(newLanguage);
    localStorage.setItem('user-language', newLanguage);
  };

  const saveLanguagePreference = async (newLanguage: string) => {
    setLanguage(newLanguage);

    // If user is logged in, save to their profile
    if (user) {
      const updatedUser = {
        ...user,
        preferences: {
          ...user.preferences,
          language: newLanguage
        }
      };
      setUser(updatedUser);

      // Save to backend
      await saveUserPreferences(user.id, { language: newLanguage });
    }
  };

  const loadUserPreferencesFromBackend = async (userId: string) => {
    try {
      const preferences = await loadUserPreferences(userId);
      if (preferences?.language) {
        setLanguage(preferences.language);
        localStorage.setItem('user-language', preferences.language);
      }
    } catch (error) {
      console.error('Failed to load user preferences:', error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        language,
        setLanguage,
        saveLanguagePreference,
        loadUserPreferencesFromBackend
      }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextProps => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
