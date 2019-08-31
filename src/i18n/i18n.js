import I18n from 'react-native-i18n';

// Import all locales
import ua from './locales/ua.json';
import ru from './locales/ru.json';
import en from './locales/en.json';

// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = true;

// Define the supported translations
I18n.translations = {
  ua, // Українська
  en, // English
  ru, // Руский
};

I18n.defaultLocale = 'en';
I18n.locale = 'ua'; // TODO: Add select from settings

// The method we'll use instead of a regular string
export const t = (name, params = {}) => {
  return I18n.t(name, params);
};

export default I18n;
