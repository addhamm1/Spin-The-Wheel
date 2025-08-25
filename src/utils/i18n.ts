const translations = {
  en: {
    play: 'Play',
    spin: 'Spin',
  },
  ar: {
    play: 'العب',
    spin: 'ادور',
  },
};

export type Lang = 'en' | 'ar';

export function t(key: string, lang: Lang = 'en'): string {
  return (translations as any)[lang][key] ?? key;
}

export default translations;
