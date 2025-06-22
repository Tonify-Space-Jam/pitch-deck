import localFont from "next/font/local";

const baseURL = "tonify-space.github.io/tonify-front";

const routes = {
  "/": true,
};

const protectedRoutes = {};

const style = {
  theme: "dark",
  brand: "violet",
  accent: "violet",
  neutral: "slate",
  border: "playful",
  solid: "color",
  solidStyle: "plastic",
  surface: "translucent",
  transition: "all"
};

const primary = localFont({
  variable: "--font-primary",
  src: "../../../public/fonts/Inter.ttf",
  display: "swap",
});

const code = localFont({
  variable: "--font-code",
  src: "../../../public/fonts/SourceCodePro.ttf",
  display: "swap",
});

const font = {
  primary: primary,
  secondary: undefined,
  tertiary: undefined,
  code: code,
};

const effects = {
  mask: {
    cursor: false,
    x: 50,
    y: 0,
    radius: 100,
  },
  gradient: {
    display: true,
    opacity: 80,
    x: 50,
    y: 60,
    width: 100,
    height: 50,
    tilt: 0,
    colorStart: "brand-background-strong",
    colorEnd: "page-background",
  },
  dots: {
    display: true,
    opacity: 40,
    size: "2",
    color: "brand-background-strong",
  },
  grid: {
    display: false,
    opacity: 100,
    color: "neutral-alpha-medium",
    width: "var(--static-space-8)",
    height: "var(--static-space-8)",
  },
  lines: {
    display: false,
    opacity: 100,
    color: "neutral-alpha-weak",
    size: "16",
    thickness: 1,
    angle: 45,
  },
};

const display = {
  location: false,
  time: false,
  themeSwitcher: true
};

const mailchimp = {
  action: "https://url/subscribe/post?parameters",
  effects: {
    mask: {
      cursor: false,
      x: 100,
      y: 0,
      radius: 100,
    },
    gradient: {
      display: true,
      x: 100,
      y: 50,
      width: 100,
      height: 100,
      tilt: -45,
      colorStart: "brand-background-strong",
      colorEnd: "static-transparent",
      opacity: 100,
    },
    dots: {
      display: false,
      size: 24,
      color: "brand-on-background-weak",
      opacity: 100,
    },
    lines: {
      display: false,
      color: "neutral-alpha-weak",
      opacity: 100,
    },
    grid: {
      display: true,
      color: "neutral-alpha-weak",
      opacity: 100,
    },
  },
};

export { routes, protectedRoutes, effects, style, display, mailchimp, baseURL, font };
