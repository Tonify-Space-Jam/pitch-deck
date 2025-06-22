export interface HomeContent {
  label: string;
  title: string | { en: string; ru: string };
  description: string | { en: string; ru: string };
  headline: string | { en: string; ru: string };
  subline: string | { en: string; ru: string };
}

export interface Person {
  firstName: string;
  lastName: string;
  role: string | { en: string; ru: string };
  bio: string | { en: string; ru: string };
  avatar: string;
  location: string;
  languages: string[];
  work: Array<{
    title: string;
    description: string;
    image: string;
  }>;
  newsletter: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
  social: Array<{
    name: string;
    url: string;
    icon: string;
  }>;
  email: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
}

export interface Newsletter {
  display: boolean;
  title: string | { en: string; ru: string };
  description: string | { en: string; ru: string };
}

export interface Social {
  name: string;
  icon: string;
  link: string;
}

export interface About {
  label: string;
  title: string;
  description: string;
  tableOfContent: {
    display: boolean;
    subItems: boolean;
  };
  avatar: {
    display: boolean;
  };
  calendar: {
    display: boolean;
    link: string;
  };
  intro: {
    display: boolean;
    title: string;
    description: string;
  };
  work: {
    display: boolean;
    title: string;
    experiences: any[];
  };
  studies: {
    display: boolean;
    title: string;
    institutions: any[];
  };
  technical: {
    display: boolean;
    title: string;
    skills: any[];
  };
}

export interface Roadmap {
  label: string;
  title: string;
  description: string;
}

export interface Team {
  label: string;
  title: string;
  description: string;
}

export interface Whitelist {
  label: string;
  title: string;
  description: string;
}

export interface Blog {
  label: string;
  title: string;
  description: string;
}

export interface Work {
  label: string;
  title: string;
  description: string;
}

export interface Gallery {
  label: string;
  title: string;
  description: string;
  images: Array<{
    src: string;
    alt: string;
    orientation: "vertical" | "horizontal";
  }>;
}

export interface TeamMember {
  firstName: string;
  lastName: string;
  role: string | { en: string; ru: string };
  bio: string | { en: string; ru: string };
  image: string;
  email?: string;
  instagram?: string;
  telegram?: string;
  github?: string;
}

export interface Advisor {
  name: string;
  role: string | { en: string; ru: string };
  bio: string | { en: string; ru: string };
  avatar: string;
} 