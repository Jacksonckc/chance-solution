import { useMemo } from 'react';
import { useUser } from '@/contexts/userContext';

// Import all translation files
import enMessages from '@/messages/en.json';
import esMessages from '@/messages/es.json';
import zhMessages from '@/messages/zh.json';

const messages = {
  en: enMessages,
  es: esMessages,
  zh: zhMessages
};

export function useTranslations() {
  const { language } = useUser();

  const t = useMemo(() => {
    return (key: string, values?: Record<string, string | number>): string | string[] => {
      const keys = key.split('.');
      let value: unknown = messages[language as keyof typeof messages] || messages.en;

      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = (value as Record<string, unknown>)[k];
        } else {
          // Fallback to English if translation not found
          value = messages.en;
          for (const fallbackKey of keys) {
            if (value && typeof value === 'object' && fallbackKey in value) {
              value = (value as Record<string, unknown>)[fallbackKey];
            } else {
              return key; // Return the key if translation not found
            }
          }
          break;
        }
      }

      // Return arrays as-is, strings as-is
      if (Array.isArray(value)) {
        return value as string[];
      }

      if (typeof value !== 'string') {
        return key;
      }

      // Simple interpolation for values
      if (values) {
        return value.replace(/\{(\w+)\}/g, (match, key) => {
          return values[key] !== undefined ? String(values[key]) : match;
        });
      }

      return value;
    };
  }, [language]);

  return t;
}
