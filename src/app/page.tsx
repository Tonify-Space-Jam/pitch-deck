'use client';

import { useState, useEffect, type ReactNode } from 'react';
import Image from 'next/image';
import {
  Card,
  Column,
  Flex,
  Heading,
  Text,
  SmartLink,
  SmartImage,
  Table,
  Button,
  Grid,
  ToggleButton,
  IconButton,
  User,
  Avatar,
  Badge,
} from '@/once-ui/components';
import { RevealFx } from '@/once-ui/components/RevealFx';
import { GlitchFx } from '@/once-ui/components/GlitchFx';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { translations } from './translations';
import { TelegramIcon, TwitterIcon, InstagramIcon } from '@/components/icons';
import { Confetti } from '@/components/Confetti';

// Helper to parse text with **bold** syntax
const Point = ({ children }: { children: string }) => {
  if (!children.includes('**')) {
    return <Text variant="body-default-l">{children}</Text>;
  }
  const parts = children.split('**');
  return (
    <Text variant="body-default-l">
      {parts.map((part, index) =>
        index % 2 === 1 ? (
          <Text as="span" weight="strong" key={index}>
            {part}
          </Text>
        ) : (
          part
        )
      )}
    </Text>
  );
};

// Section wrapper with image
const Section = ({
  title,
  children,
  gap = 'm',
  imageNumber,
}: {
  title: string;
  children: ReactNode;
  gap?: 'xs' | 's' | 'm' | 'l' | 'xl';
  imageNumber?: number;
}) => (
  <RevealFx translateY={8} delay={0.1}>
    <div style={{ position: 'relative' }}>
      {imageNumber && (
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '400px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          overflow: 'hidden',
          zIndex: 100,
        }}>
          <SmartImage
            src={`/features/${imageNumber}.png`}
            alt={`${title} feature`}
            aspectRatio="16/9"
            unoptimized={true}
            // style={{ marginTop: '50px', height: 'auto' }}
          />
        </div>
      )}
      <Card padding="xl" radius="xl" border="brand-alpha-medium" fillWidth style={{ position: 'relative' }}>

          {/* // <div style={{
          //   position: 'absolute',
          //   top: '8px',
          //   left: '50%',
          //   transform: 'translateX(-50%)',
          //   background: 'var(--neutral-on-background-weak)',
          //   borderRadius: '50%',
          //   padding: '12px',
          //   boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          //   border: '2px solid var(--brand-alpha-medium)',
          // }}>
          //   {/* <Image
          //     src={`/features/${imageNumber}.svg`}
          //     alt={`${title} icon`}
          //     width={40}
          //     height={40}
          //     style={{ borderRadius: '50%', marginTop: '50px' }}

          //   /> 
          // </div> */}
        <Column horizontal="center" gap={gap} style={{ paddingTop: imageNumber ? '200px' : '0' }}>
          <Heading variant="display-strong-m" style={{ textAlign: 'center' }}>
            {title}
          </Heading>
          {children}
        </Column>
      </Card>
    </div>
  </RevealFx>
);

// Table for Market Size
const TableSection = ({
  title,
  data,
  tam,
}: {
  title: string;
  data: { headers: string[]; rows: string[][] };
  tam: string;
}) => {
  const tableData = {
    headers: data.headers.map((h) => ({ content: h, key: h.toLowerCase() })),
    rows: data.rows,
  };
  return (
    <Section title={title} gap="m">
      <Table data={tableData} />
      <Point>{tam}</Point>
    </Section>
  );
};

// Blockquote component for the quote
const Quote = ({ children }: { children: ReactNode }) => (
  <Text
    as="blockquote"
    variant="heading-default-xl"
    style={{
      borderLeft: '4px solid var(--brand-solid-medium)',
      paddingLeft: '16px',
      margin: '16px 0',
      fontStyle: 'italic',
      color: 'var(--brand-on-background-strong)',
    }}
  >
    {children}
  </Text>
);

export default function PitchDeck() {
  const [lang, setLang] = useState<'ru' | 'en'>('ru');
  const [mounted, setMounted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleWriteClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 4000); // Hide confetti after 4 seconds
    window.location.href = `mailto:${
      translations[lang].contact.email
    }`;
  };

  const t = translations[lang];

  return (
    <>
      {showConfetti && <Confetti active={showConfetti} />}
      <Column
        horizontal="center"
        gap="xl"
        style={{
          maxWidth: '960px',
          width: '100%',
          padding: '120px 24px 80px',
        }}
      >
        <LanguageSwitcher lang={lang} setLang={setLang} />

        <Flex
          as="aside"
          style={{
            position: 'fixed',
            top: '80px',
            right: '20px',
            flexDirection: 'column',
            gap: '5px',
            zIndex: 1000,
          }}
        >
          <a
            href="https://t.me/tonify_space"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton aria-label="Telegram">
              <TelegramIcon />
            </IconButton>
          </a>
          <a
            href="https://x.com/tonify_space"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton aria-label="Twitter">
              <TwitterIcon />
            </IconButton>
          </a>
          <a
            href="https://instagram.com/tonify_space"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton aria-label="Instagram">
              <InstagramIcon />
            </IconButton>
          </a>
        </Flex>

        {/* Hero */}
        <Column horizontal="center" gap="m" style={{ textAlign: 'center' }}>
          <GlitchFx interval={3000} trigger="hover" speed="medium">
            <Image
              src="/logo.png"
              alt="Tonify Logo"
              width={120}
              height={120}
              style={{ borderRadius: '32px' }}
            />
          </GlitchFx>
          <Heading variant="display-strong-xl">{t.title}</Heading>
        </Column>

        {/* Sections */}
        <Section title={t.problem.title} gap="xs" imageNumber={1}>
          <Column
            horizontal="start"
            gap="xs"
            style={{ textAlign: 'left' }}
          >
            {t.problem.points.map((point, i) => (
              <Point key={i}>{point}</Point>
            ))}
          </Column>
        </Section>

        <Section title={t.solution.title} gap="s" imageNumber={2}>
          <Point>{t.solution.subtitle}</Point>
          <Column
            horizontal="start"
            gap="xs"
            style={{ textAlign: 'left' }}
          >
            {t.solution.points.map((point, i) => (
              <Point key={i}>{point}</Point>
            ))}
          </Column>
        </Section>

        <Section title={t.whyNow.title} gap="s" imageNumber={3}>
          <Column
            horizontal="start"
            gap="xs"
            style={{ textAlign: 'left' }}
          >
            {t.whyNow.points.map((point, i) => (
              <Point key={i}>{point}</Point>
            ))}
          </Column>
        </Section>

        <TableSection
          title={t.marketSize.title}
          data={t.marketSize.table}
          tam={t.marketSize.tam}
        />

        <Section title={t.traction.title} gap="xs">
          <Column
            horizontal="start"
            gap="xs"
            style={{ textAlign: 'left' }}
          >
            {t.traction.points.map((point, i) => (
              <Point key={i}>{point}</Point>
            ))}
          </Column>
        </Section>

        <Section title={t.investment.title} gap="s">
          <Column
            horizontal="start"
            gap="xs"
            style={{ textAlign: 'left' }}
          >
            {t.investment.points.map((point, i) => (
              <Point key={i}>{point}</Point>
            ))}
          </Column>
          <Text weight="strong" style={{ marginTop: '16px', textAlign: 'center' }}>
            {t.investment.use_title}
          </Text>
          <Column
            horizontal="start"
            gap="xs"
            style={{ textAlign: 'left' }}
          >
            {t.investment.use_points.map((point, i) => (
              <Point key={i}>{point}</Point>
            ))}
          </Column>
        </Section>

        <Section title={t.whyWin.title} gap="s">
          <Column
            horizontal="start"
            gap="s"
            style={{ textAlign: 'left', width: '100%' }}
          >
            {t.whyWin.points.map((point, i) => (
              <Point key={i}>{point}</Point>
            ))}
          </Column>
          <Quote>{t.whyWin.quote}</Quote>
        </Section>

        <Section title={t.contact.title} gap="m">
          <RevealFx translateY={8} delay={0.1}>
            <Card padding="l" radius="xl" border="brand-alpha-medium" fillWidth>
              <Flex gap="l" vertical="center" horizontal="start" style={{ width: '100%' }}>
                <GlitchFx speed="medium" trigger="hover">
                  <Avatar src="/seegy.jpg" size="xl" statusIndicator={{ color: 'green' }} />
                </GlitchFx>
                <Flex direction="column" gap="xs" style={{ flex: 1 }}>
                  <Flex vertical="center" gap="s">
                    <Text variant="heading-strong-m">{t.contact.name}</Text>
                    <Badge title="Founder" effect />
                  </Flex>
                  <Flex gap="s" vertical="center">
                    <SmartLink href={`https://t.me/${t.contact.telegram.substring(1)}`} unstyled>
                      <Badge icon="telegram" title={t.contact.telegram} effect />
                    </SmartLink>
                    <SmartLink href={`mailto:${t.contact.email}`} unstyled>
                      <Badge icon="mail" title={t.contact.email} effect />
                    </SmartLink>
                    <SmartLink href={`https://${t.contact.website}`} unstyled>
                      <Badge icon="link" title={t.contact.website} effect />
                    </SmartLink>
                  </Flex>
                </Flex>
              </Flex>
            </Card>
          </RevealFx>
        </Section>

        <SmartLink href="/" unstyled>
          <Text variant="body-default-m" onBackground="neutral-medium">
            © 2025 tonify.space
          </Text>
        </SmartLink>
      </Column>
    </>
  );
}