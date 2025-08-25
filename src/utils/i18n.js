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

export function t(key, lang = 'en') {
  return translations[lang][key] ?? key;
}

export default translations;
