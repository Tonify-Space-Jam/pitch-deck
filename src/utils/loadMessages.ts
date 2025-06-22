/**
 * Загрузка переводов для конкретной локали
 */
export async function loadMessages(locale: string = 'en') {
  try {
    // Здесь можно было бы подключить реальные файлы переводов
    // или подгружать их с сервера
    const messages = {
      en: {
        app: {
          hello: 'Hello',
          welcome: 'Welcome to Tonify',
          description: 'A decentralized music platform on TON blockchain',
        }
      },
      ru: {
        app: {
          hello: 'Привет',
          welcome: 'Добро пожаловать в Tonify',
          description: 'Децентрализованная музыкальная платформа на блокчейне TON',
        }
      },
    };
    
    return messages[locale] || messages.en;
  } catch (error) {
    console.error('Error loading messages:', error);
    return {};
  }
} 