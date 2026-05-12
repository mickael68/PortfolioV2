import 'server-only'

const dictionaries = {
  fr: () => import('../dictionaries/fr.json').then((module) => module.default),
  en: () => import('../dictionaries/en.json').then((module) => module.default),
}

export const getDictionary = async (locale: string) => {
  if (locale === 'en') return dictionaries.en();
  return dictionaries.fr();
}
