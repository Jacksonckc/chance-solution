import React, { useState } from 'react';
import { useUser } from '@/contexts/userContext';
import Button from '@/components/atoms/Button';
import Text from '@/components/atoms/Text';

export default function LoginExample() {
  const { user, setUser, loadUserPreferencesFromBackend } = useUser();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);

    // Simulate login process
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Create a mock user
    const mockUser = {
      id: 'user-123',
      name: 'John Doe',
      email: 'john@example.com',
      preferences: {
        language: 'zh', // User's saved preference
        theme: 'blue'
      }
    };

    // Set the user
    setUser(mockUser);

    // Load user preferences from backend
    await loadUserPreferencesFromBackend(mockUser.id);

    setIsLoading(false);
  };

  const handleLogout = () => {
    setUser(null);
    // Clear localStorage
    localStorage.removeItem('user-language');
  };

  return (
    <div className='card p-6 max-w-md mx-auto'>
      <Text variant='h3' className='mb-4'>
        User Login Example
      </Text>

      {!user ? (
        <div>
          <Text variant='body2' className='mb-4' style={{ color: 'var(--color-text-light)' }}>
            Click login to simulate a user logging in with saved language preferences.
          </Text>
          <Button onClick={handleLogin} disabled={isLoading} className='btn-primary w-full'>
            {isLoading ? 'Logging in...' : 'Login (Simulate)'}
          </Button>
        </div>
      ) : (
        <div>
          <Text variant='body2' className='mb-2'>
            <strong>Logged in as:</strong> {user.name}
          </Text>
          <Text variant='body2' className='mb-2'>
            <strong>Email:</strong> {user.email}
          </Text>
          <Text variant='body2' className='mb-4'>
            <strong>Saved Language:</strong> {user.preferences?.language || 'Not set'}
          </Text>

          <Text variant='body2' className='mb-4' style={{ color: 'var(--color-text-light)' }}>
            The language preference will be automatically loaded from the user&apos;s profile when
            they log in.
          </Text>

          <Button onClick={handleLogout} className='btn-secondary w-full'>
            Logout
          </Button>
        </div>
      )}
    </div>
  );
}
