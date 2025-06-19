// Utility functions for managing user preferences

export interface UserPreferences {
  language?: string;
  theme?: string;
  notifications?: boolean;
  timezone?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  preferences?: UserPreferences;
}

/**
 * Save user preferences to the backend
 * This function would be called when a user is logged in
 */
export async function saveUserPreferences(
  userId: string,
  preferences: Partial<UserPreferences>
): Promise<void> {
  try {
    // Example API call - replace with your actual endpoint
    const response = await fetch(`/api/users/${userId}/preferences`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(preferences)
    });

    if (!response.ok) {
      throw new Error('Failed to save preferences');
    }

    console.log('User preferences saved successfully');
  } catch (error) {
    console.error('Error saving user preferences:', error);
    // You might want to show a toast notification here
  }
}

/**
 * Load user preferences from the backend
 * This function would be called when a user logs in
 */
export async function loadUserPreferences(userId: string): Promise<UserPreferences | null> {
  try {
    // Example API call - replace with your actual endpoint
    const response = await fetch(`/api/users/${userId}/preferences`);

    if (!response.ok) {
      throw new Error('Failed to load preferences');
    }

    const preferences = await response.json();
    return preferences;
  } catch (error) {
    console.error('Error loading user preferences:', error);
    return null;
  }
}

/**
 * Get default preferences for new users
 */
export function getDefaultPreferences(): UserPreferences {
  return {
    language: 'en',
    theme: 'pink',
    notifications: true,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
  };
}

/**
 * Merge user preferences with defaults
 */
export function mergeWithDefaults(userPreferences: Partial<UserPreferences>): UserPreferences {
  const defaults = getDefaultPreferences();
  return { ...defaults, ...userPreferences };
}
