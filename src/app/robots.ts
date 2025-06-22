import { baseURL } from "@/app/resources";
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',      // API эндпоинты
        '/admin/',    // Админка
        '/private/',  // Приватные страницы
        '/*?*',       // URL с параметрами запросов
        '/*/download/*', // URL для скачивания
      ],
    },
    sitemap: `https://${baseURL}/sitemap.xml`,
  };
}
