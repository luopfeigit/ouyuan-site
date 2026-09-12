import { en } from './en';
import { id } from './id';
import { zh } from './zh';

export const supportedLanguages = ['en', 'id', 'zh'] as const;
export type SupportedLanguage = typeof supportedLanguages[number];

// 以 en 作为基准类型，确保所有语言必须具有相同的键值结构
export type LocaleTranslation = typeof en;

export const translations: Record<SupportedLanguage, LocaleTranslation> = {
  en,
  id: id as unknown as LocaleTranslation,
  zh: zh as unknown as LocaleTranslation,
};

export { en, id, zh };