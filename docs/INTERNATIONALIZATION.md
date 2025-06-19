# Internationalization (i18n) Setup

This project uses a custom internationalization system with user context for language management. The application currently supports **English**, **Spanish**, and **Chinese**.

## 🌍 Supported Languages

- **English (en)** - Default language
- **Spanish (es)** - Español
- **Chinese (zh)** - 中文

## 📁 File Structure

```
├── messages/                  # Translation files
│   ├── en.json               # English translations
│   ├── es.json               # Spanish translations
│   └── zh.json               # Chinese translations
├── contexts/
│   └── userContext.tsx       # User context with language preferences
├── lib/
│   └── userPreferences.ts    # Utility functions for preference management
├── hooks/
│   └── useTranslations.ts    # Custom translation hook
└── components/
    └── molecules/
        └── LanguageSwitcher.tsx  # Language switcher component
```

## 🚀 How to Use

### 1. In Components

```tsx
import { useTranslations } from '@/hooks/useTranslations';

export default function MyComponent() {
  const t = useTranslations();

  return (
    <div>
      <h1>{t('home.title')}</h1>
      <p>{t('home.subtitle')}</p>
      <button>{t('common.submit')}</button>
    </div>
  );
}
```

### 2. Adding Language Switcher

```tsx
import LanguageSwitcher from '@/components/molecules/LanguageSwitcher';

export default function Header() {
  return (
    <header>
      {/* Your header content */}
      <LanguageSwitcher className="ml-4" />
    </header>
  );
}
```

### 3. URL Structure

URLs are consistent regardless of language:

- English: `/about`
- Spanish: `/about` (same URL, translated content)
- Chinese: `/about` (same URL, translated content)

The language preference is managed through the user context and doesn't affect the URL structure.

## 🔄 Language Persistence

### User Context Integration

The language preference is now managed through the user context and persists across:

- **Page navigation** - Language stays the same when moving between pages
- **Browser sessions** - Saved to localStorage
- **User profiles** - Can be saved to user accounts when logged in

### How It Works

1. **Local Storage**: Language preference is saved to `localStorage` for persistence
2. **User Context**: Centralized language state management
3. **Content Translation**: All text is translated based on the selected language
4. **Backend Integration**: Can save to user profile when logged in

### User Context Usage

```tsx
import { useUser } from '@/contexts/userContext';

export default function MyComponent() {
  const { language, setLanguage, saveLanguagePreference } = useUser();

  const handleLanguageChange = (newLang: string) => {
    // This will update the language and save to localStorage
    saveLanguagePreference(newLang);
  };

  return <div>Current language: {language}</div>;
}
```

### Backend Integration

When a user is logged in, language preferences can be saved to their profile:

```tsx
// In your login component
const handleLogin = async (userData) => {
  setUser(userData);

  // Load user preferences from backend
  await loadUserPreferencesFromBackend(userData.id);
};

// Language changes will automatically save to backend
const { saveLanguagePreference } = useUser();
saveLanguagePreference('zh'); // Saves to localStorage and backend
```

## 📝 Adding New Translations

### 1. Add to Translation Files

Add the new key to all language files:

**en.json:**

```json
{
  "newSection": {
    "title": "New Title",
    "description": "New description"
  }
}
```

**es.json:**

```json
{
  "newSection": {
    "title": "Nuevo Título",
    "description": "Nueva descripción"
  }
}
```

**zh.json:**

```json
{
  "newSection": {
    "title": "新标题",
    "description": "新描述"
  }
}
```

### 2. Use in Components

```tsx
const t = useTranslations();
return <h1>{t('newSection.title')}</h1>;
```

## 🔧 Configuration

### Adding a New Language

1. **Create translation file:**

```bash
touch messages/fr.json
```

2. **Add language to LanguageSwitcher:**

```tsx
const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' }  // Add new language
];
```

## 🎯 Best Practices

1. **Use nested keys** for better organization:

   ```json
   {
     "contact": {
       "form": {
         "title": "Contact Form"
       }
     }
   }
   ```

2. **Keep translations consistent** across all languages

3. **Use the `t()` function** for all user-facing text

4. **Test all languages** when adding new features

5. **Save preferences** to user profiles when logged in

## 🚀 Example Usage

See `components/examples/TranslatedExample.tsx` for a complete example of how to use translations in a component.

See `components/examples/LoginExample.tsx` for an example of how language preferences work with user authentication.

## 📚 Resources

- [React Context API](https://react.dev/reference/react/createContext)
- [localStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [Internationalization Best Practices](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
