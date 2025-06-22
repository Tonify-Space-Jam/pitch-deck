import { baseURL } from '@/app/resources';
import { Metadata } from 'next';

/**
 * Creates metadata configuration object for Next.js pages
 * 
 * This is a utility function to create consistent metadata objects for use with
 * Next.js metadata API. Note this should be used inside generateMetadata functions,
 * not as a React hook.
 *
 * @param params - Metadata configuration parameters
 * @returns Metadata object conforming to Next.js Metadata API
 */
export function createMetadata({
  title,
  description,
  image = '/og-image.png',
  isArticle = false,
  publishedTime,
  modifiedTime,
  authorName,
  keywords,
  path,
  locale,
}: {
  title: string;
  description: string;
  image?: string;
  isArticle?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  authorName?: string;
  keywords?: string;
  path: string;
  locale: string;
}): Metadata {
  const isRussian = locale === 'ru';
  
  // Construct full URLs
  const pageUrl = `https://${baseURL}/${locale}${path}`;
  const imageUrl = image.startsWith('http') ? image : `https://${baseURL}${image}`;
  
  // Base metadata object
  const metadata: Metadata = {
    metadataBase: new URL(`https://${baseURL}`),
    title,
    description,
    // Add keywords using the 'other' field which is supported by Next.js Metadata API
    other: keywords ? {
      keywords,
    } : undefined,
    alternates: {
      canonical: pageUrl,
      languages: {
        'en': `https://${baseURL}/en${path}`,
        'ru': `https://${baseURL}/ru${path}`,
      },
    },
    openGraph: isArticle 
      ? {
          title,
          description,
          url: pageUrl,
          siteName: 'TONIFY',
          locale: isRussian ? 'ru_RU' : 'en_US',
          type: 'article',
          publishedTime,
          modifiedTime,
          authors: authorName ? [authorName] : undefined,
          images: [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: title,
            },
          ],
        }
      : {
          title,
          description,
          url: pageUrl,
          siteName: 'TONIFY',
          locale: isRussian ? 'ru_RU' : 'en_US',
          type: 'website',
          images: [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: title,
            },
          ],
        },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
      site: '@tonify_music',
      creator: authorName ? `@${authorName.replace(/\s+/g, '').toLowerCase()}` : '@tonify_music',
    },
  };
  
  return metadata;
}

export default createMetadata; 