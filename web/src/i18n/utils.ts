import { ui, defaultLang, type Lang } from './ui';
import { landing } from './landing';

const allTranslations: Record<Lang, Record<string, string>> = {
  en: { ...ui.en, ...landing.en },
  es: { ...ui.es, ...landing.es },
};

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'es') return 'es';
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    return allTranslations[lang]?.[key] || allTranslations[defaultLang]?.[key] || key;
  };
}

export function getLocalizedPath(currentPath: string, targetLang: Lang): string {
  const path = currentPath.replace(/\/$/, '') || '/';

  if (targetLang === 'es') {
    if (path === '/') return '/es';
    return `/es${path}`;
  } else {
    if (path === '/es') return '/';
    return path.replace(/^\/es/, '') || '/';
  }
}

export function getBaseUrl(lang: Lang): string {
  return lang === 'es' ? '/es' : '';
}
