type Translation = {
  title: string;
  problem: {
    title: string;
    points: string[];
  };
  solution: {
    title: string;
    subtitle: string;
    points: string[];
  };
  whyNow: {
    title: string;
    points: string[];
  };
  marketSize: {
    title: string;
    table: {
      headers: string[];
      rows: string[][];
    };
    tam: string;
  };
  traction: {
    title: string;
    points: string[];
  };
  investment: {
    title: string;
    points: string[];
    use_title: string;
    use_points: string[];
  };
  whyWin: {
    title: string;
    points: string[];
    quote: string;
  };
  contact: {
    title: string;
    name: string;
    telegram: string;
    email: string;
    website: string;
    button: string;
  };
};

export const translations: { ru: Translation; en: Translation } = {
  ru: {
    title: 'Tonify: Музыка, которую мы заслужили',
    problem: {
        title: '💎 Проблема',
        points: [
            'В музыке доминируют централизованные гиганты (Spotify, Apple Music, мейджор-лейблы).',
            'Артисты получают копейки (≲12% от дохода).',
            'Слушатели не получают ничего за свое внимание и лояльность.',
            'Музыкальная индустрия готова к переменам — но никто не сделал это *внутри Telegram.*'
        ]
    },
    solution: {
        title: '🚀 Решение',
        subtitle: 'Tonify — это Web3-платформа для поиска музыки с механиками Music-to-Earn и Vibe-to-Earn, построенная на TON и полностью интегрированная с Telegram Mini Apps.',
        points: [
            '🎧 Слушай и зарабатывай: Пользователи получают токены $TREC за прослушивание треков.',
            '❤️ Вайбы имеют ценность: Лайки = ончейн-активы.',
            '⚡ Мгновенный доступ через Telegram Mini App: 1+ млрд потенциальных пользователей.',
            '💸 Прямые роялти артистам. Ноль лейблов. Ноль посредников.'
        ]
    },
    whyNow: {
        title: '🔥 Почему сейчас?',
        points: [
            'Мировой музыкальный рынок превышает $30 млрд и быстро токенизируется (рынок MusicFi растет на 46% в год).',
            'SocialFi на взлете: Telegram-игры, такие как Notcoin, достигли 300+ млн пользователей за месяцы.',
            'TON + Telegram Mini Apps становятся новым фронтиром для массового принятия Web3.',
            'Tonify первым занимает эту нишу: музыка внутри Telegram, геймифицированная и токенизированная.'
        ]
    },
    marketSize: {
        title: '🌍 Размер рынка',
        table: {
            headers: ['Платформа', 'Пиковая оценка', 'Текущая'],
            rows: [
                ['Spotify', '$113B', '$56B'],
                ['Audius', '$1B', '~$80M'],
                ['Sound.xyz', '$50M (оценка)', 'Нишевый'],
                ['Notcoin', '$1.5B', '~$350M']
            ]
        },
        tam: 'Web3 MusicFi + SocialFi внутри Telegram: **голубой океан на $10B+**.'
    },
    traction: {
        title: '⚙️ Текущий статус',
        points: [
            '🎨 UI/UX MVP готов (Next.js + Once UI)',
            '🧩 Интеграция с экосистемой Telegram Mini App',
            '🎧 Проиндексировано 5,000+ треков',
            '✅ Смарт-контракты (роялти, токеномика) в разработке',
            '🛠️ Запуск альфа-версии планируется на июль 2025'
        ]
    },
    investment: {
        title: '💰 Запрос инвестиций',
        points: [
            '**Раунд:** Pre-Seed: $100k – $200k',
            '**Оценка:** $1M – $3M',
        ],
        use_title: '',
        use_points: [
            'Финализацию MVP и бэкенд-инфраструктуры',
            'Масштабирование через Cloudflare, TON Storage, IPFS',
            'Аудит и запуск смарт-контрактов',
            'Рост комьюнити и распределение токенов'
        ]
    },
    whyWin: {
        title: '🔮 Почему мы победим',
        points: [
            '🫡 Мы встречаем пользователей там, где они уже есть: внутри Telegram.',
            '🎮 Проверенные механики (Notcoin, Hamster Kombat) показывают, что миллионы могут быть привлечены за дни.',
            '🎧 Music-to-Earn + Vibe-to-Earn = высокочастотная петля вовлечения.',
            "🌱 Мы создаем социальный слой MusicFi для Telegram — никто другой этого не делает."
        ],
        quote: 'Мы не просто стримим музыку. Мы токенизируем вайбы.'
    },
    contact: {
        title: '📲 Контакты',
        name: 'Seegy – CEO',
        telegram: '@aquyro',
        email: 'seegy@tonify.space',
        website: 'instagram.com/aquyro',
        button: 'Написать',
    }
  },
  en: {
    title: 'Tonify — Music You Deserve',
    problem: {
        title: '💎 Problem',
        points: [
            'Music is dominated by centralized giants (Spotify, Apple Music, major labels).',
            'Artists earn pennies (≲12% of revenue).',
            'Listeners earn nothing for their attention and loyalty.',
            'The music industry is ready for disruption — but no one built it *inside Telegram.*'
        ]
    },
    solution: {
        title: '🚀 Solution',
        subtitle: 'Tonify is a Web3 music discovery platform with Music-to-Earn and Vibe-to-Earn mechanics, built on TON and fully integrated with Telegram Mini Apps.',
        points: [
            '🎧 Listen and Earn: Users receive $TREC tokens for spinning tracks.',
            '❤️ Vibes Have Value: Likes = on-chain assets.',
            '⚡ Instant access via Telegram Mini App: 1B+ potential users.',
            '💸 Direct royalties to artists. Zero lables. Zero middlemen.'
        ]
    },
    whyNow: {
        title: '🔥 Why Now?',
        points: [
            'The global music market exceeds $30B and rapidly tokenizes (MusicFi TAM growing at 46% CAGR).',
            'SocialFi is booming: Telegram-native games like Notcoin reached 300M+ users in months.',
            'TON blockchain + Telegram Mini Apps are becoming the next mass-adoption frontier for Web3.',
            'Tonify is first to claim this niche: music inside Telegram, gamified and tokenized.'
        ]
    },
    marketSize: {
        title: '🌍 Market Size',
        table: {
            headers: ['Platform', 'Peak Valuation', 'Current'],
            rows: [
                ['Spotify', '$113B', '$56B'],
                ['Audius', '$1B', '~$80M'],
                ['Sound.xyz', '$50M est.', 'Niche'],
                ['Notcoin', '$1.5B', '~$350M']
            ]
        },
        tam: 'Web3 MusicFi + SocialFi inside Telegram: **$10B+ blue ocean**.'
    },
    traction: {
        title: '⚙️ Traction',
        points: [
            '🎨 UI/UX MVP ready (Next.js + Once UI)',
            '🧩 Integrated with Telegram Mini App ecosystem',
            '🎧 5,000+ tracks indexed',
            '✅ Smart contracts (royalties, tokenomics) in progress',
            '🛠️ Alpha launch planned for July 2025'
        ]
    },
    investment: {
        title: '💰 Investment Ask',
        points: [
            '**Pre-Seed Round:** $100k – $200k',
            '**Valuation:** $1M – $3M',
        ],
        use_title: '',
        use_points: [
            'Finalize MVP and backend infra',
            'Scale via Cloudflare, TON Storage, IPFS',
            'Smart contract audits and launch',
            'Community growth and token distribution'
        ]
    },
    whyWin: {
        title: '🔮 Why We Will Win',
        points: [
            '🫡 We meet users where they are: inside Telegram.',
            '🎮 Proven mechanics (Notcoin, Hamster Kombat) show millions can be onboarded in days.',
            '🎧 Music-to-Earn + Vibe-to-Earn = high-frequency engagement loop.',
            "🌱 We're creating a MusicFi social layer for Telegram — no one else is doing it."
        ],
        quote: "We don't just stream music. We tokenize vibes."
    },
    contact: {
        title: '📲 Contact',
        name: 'Seegy – CEO',
        telegram: '@aquyro',
        email: 'seegy@tonify.space',
        website: 'instagram.com/aquyro',
        button: 'Write',
    }
  }
};