import { baseURL } from "@/app/resources";
import { MetadataRoute } from 'next';

// Список основных страниц сайта (синхронизирован с config.js)
const pages = [
  '',          // Главная страница
  // '/about',    // Добавлен
  // '/features', 
  // '/blog', 
  '/roadmap', 
  '/faq',      // Добавлен
  // '/artists', // Убран
  // '/events',  // Убран
  '/team',
  '/whitelist',
  '/privacy',  // Добавлен
  '/terms',    // Добавлен
  '/changelog' // Добавлен
];

// Список поддерживаемых языков
const locales = ['en', 'ru'];

// Функция для генерации sitemap
export default function sitemap(): MetadataRoute.Sitemap {
  // Получаем текущую дату для lastModified
  const currentDate = new Date();
  
  // Массив для хранения всех URL
  const sitemapEntries: MetadataRoute.Sitemap = [];
  
  // Добавляем все страницы для всех языков
  for (const locale of locales) {
    for (const page of pages) {
      sitemapEntries.push({
        url: `https://${baseURL}/${locale}${page}`,
        lastModified: currentDate,
        changeFrequency: page === '' ? 'daily' : 'weekly',
        priority: page === '' ? 1.0 : 0.8,
      });
    }
    
    // Особые случаи для блога и других динамических страниц
    // В реальном проекте здесь бы был запрос к API или базе данных
    // для получения всех статей блога и других динамических страниц
    sitemapEntries.push({
      url: `https://${baseURL}/${locale}/blog/MUSIC-to-earn-explained`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
    
    sitemapEntries.push({
      url: `https://${baseURL}/${locale}/blog/blockchain-MUSIC-revolution`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }
  
  return sitemapEntries;
}
