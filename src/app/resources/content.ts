import React from "react";
import { InlineCode } from "@/once-ui/components";
import { 
  HomeContent, 
  Person, 
  Newsletter, 
  Social, 
  About, 
  Roadmap, 
  Team, 
  Whitelist,    
  Blog, 
  Work, 
  Gallery,
  TeamMember,
  Advisor
} from "./types";
import { getTranslations } from 'next-intl/server'; // Для серверных компонентов, если нужно

export const person: Person = {
  firstName: "Sergey",
  lastName: "Stepanovich",
  role: { 
    en: "Founder x Artist",
    ru: "Основатель x Артист"
  },
  bio: { 
    en: "15+ years in MUSIC. Leading digital strategy at a major label. On a mission to rebuild the MUSIC economy with blockchain.",
    ru: "15+ лет в музыке. Отвечаю за цифровую стратегию в крупном лейбле. Моя миссия — перестроить музыкальную экономику с помощью блокчейна."
  },
  avatar: "/images/seegy.jpg",
  email: "tonifyspace@gmail.com",
  location: "Global",
  languages: ["English", "Russian"],
  work: [
    {
      title: "MUSIC-to-Earn",
      description: "Зарабатывайте токены за прослушивание музыки и создание контента",
      image: "ALT: MUSIC-to-Earn Feature"
    },
    {
      title: "NFT Tickets",
      description: "Уникальные билеты на концерты в виде NFT с дополнительными преимуществами",
      image: "ALT: NFT Tickets Feature"
    },
    {
      title: "AI Artists",
      description: "Искусственный интеллект для создания и продвижения музыки",
      image: "ALT: AI Artists Feature"
    }
  ],
  newsletter: {
    title: "Subscribe to my newsletter",
    description: "Get the latest updates and news about Tonify",
    buttonText: "Subscribe",
    buttonLink: "/newsletter",
  },
  social: [
    {
      name: "Twitter",
      url: "https://twitter.com/tonify_space",
      icon: "twitter",
    },
    {
      name: "Telegram",
      url: "https://t.me/tonify_space",
      icon: "",
    },
    {
      name: "GitHub",
      url: "https://github.com/Tonify-Sorce-Jam",
      icon: "github",
    },
  ],
};

export const newsletter: Newsletter = {
  display: true,
  title: { 
    en: "Join the Revolution 🔥",
    ru: "Присоединяйся к Революции 🔥"
  },
  description: { 
    en: "Get early access, be a pioneer, earn $TREC airdrop.",
    ru: "Получи ранний доступ, будь первооткрываетелем"
  }
};

export const social: Social[] = [
  {
    name: "",
    icon: "telegram",
    link: "https://t.me/tonify_space",
  },
  {
    name: "X",
    icon: "x",
    link: "https://twitter.com/tonify_space",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://instagram.com/tonify_space",
  }
];

export const home: HomeContent = {
  label: "Home",
  title: "Tonify",
  description: "STREAM x EARN x OWN | TONIFY",
  headline: "Tonify: Join to the Revolution",
  subline: "Powered by TON"
};

export const about: About = {
  label: "About",
  title: "About",
  description: "About Tonify - the decentralized MUSIC platform on TON blockchain",
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  intro: {
    display: true,
    title: "Introduction",
    description: "Tonify - первая полностью децентрализованная музыкальная платформа на блокчейне TON, представляющая революционный подход к созданию, распространению и потреблению музыки."
  },
  calendar: { display: false, link: "" },
  work: { display: false, title: "", experiences: [] },
  studies: { display: false, title: "", institutions: [] },
  technical: { display: false, title: "", skills: [] }
};

export const roadmap: Roadmap = {
  label: "Roadmap",
  title: "Дорожная карта",
  description: "GENESIS: запуск. EXPANSION: MUSIC-to-Earn. TOKENOMICS: токен и DAO. MAINSTREAM: глобальный рост."
};

export const team: Team = {
  label: "Team",
  title: "Наша команда",
  description: "Tonify создается опытной командой экспертов, объединяющих специалистов из музыкальной индустрии, блокчейн-разработки и искусственного интеллекта"
};

export const whitelist: Whitelist = {
  label: "Whitelist",
  title: "Whitelist",
  description: "Ранний доступ и airdrop для первых пользователей."
};

export const blog: Blog = {
  label: "Blog",
  title: "Blog",
  description: `Read what ${person.firstName} has been up to recently`
};


export const gallery: Gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.firstName}`,
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    }
  ]
};

export const teamMembers: TeamMember[] = [
  {
    firstName: "Seegy",
    lastName: "",
    role: {
      en: "Founder & Artist",
      ru: "Основатель и Артист"
    },
    bio: {
      en: "15+ years in MUSIC. Leading digital strategy at a major label. On a mission to rebuild the MUSIC economy with blockchain.",
      ru: "15+ лет в музыкальной индустрии, бывший директор по цифровым технологиям в крупном лейбле. Стремится исправить сломанную музыкальную экономику с помощью блокчейна."
    },
    image: "/images/team/seegy.jpg",
    email: "seegy@tonify.space",
    instagram: "https://instagram.com/aquyro",
    telegram: "https://t.me/MUSICseegy",
  },

  {
    firstName: "Brok3",
    lastName: "",
    role: {
      en: "CTO & Systems Architect",
      ru: "CTO & Systems Architect",
    },
    bio: {
      en: "10+ years in software development, specialized in blockchain, AI and web development. Led development in Tonify, smart contracts, dApp, and more.",
      ru: "Более 10 лет в разработке ПО, специализируется на блокчейн, AI и веб разработке. Руководит разработкой в Tonify, созданием умных контрактов, разработка dApp, отдыхает на берегу моря."
    },
    image: "/images/team/brok3.jpg",
    email: "brok3.dev@outlook.com",
    instagram: "https://instagram.com/vlonedevller",
    telegram: "https://t.me/brok3dev",
    github: "https://github.com/ProximaCA"
 }
];

export function getLocalizedString(text: string | { [key: string]: string } | undefined, locale: string = 'en'): string {
  if (!text) return '';
  
  if (typeof text === 'string') return text;
  
  if (text[locale]) return text[locale];
  
  return text['en'] || Object.values(text)[0] || '';
}
