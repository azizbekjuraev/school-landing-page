import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    preload: ['en'],
    saveMissing: true,
    supportedLngs: ['ru', 'en'],
    react: { useSuspense: true },
    ns: ['common', 'login', 'signup', 'errors', 'search', 'showcase', 'profile', 'resources', 'components']
  })

export default i18n
