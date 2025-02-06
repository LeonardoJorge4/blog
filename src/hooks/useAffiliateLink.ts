import { useLocale } from '@/contexts/LocaleContext';
import { getTranslation } from '@/locales';

export function useAffiliateLink(product: string, store: string) {
  const { locale } = useLocale();
  return getTranslation(locale, `affiliateLinks.${product}.${store}`);
}
