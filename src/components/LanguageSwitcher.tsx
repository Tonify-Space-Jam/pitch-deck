'use client';
import { SegmentedControl, type ButtonOption } from '@/once-ui/components';

interface LanguageSwitcherProps {
  lang: 'ru' | 'en';
  setLang: (lang: 'ru' | 'en') => void;
}

export const LanguageSwitcher = ({ lang, setLang }: LanguageSwitcherProps) => {
  const buttons: ButtonOption[] = [
    { value: 'ru', label: '🇷🇺 RU' },
    { value: 'en', label: '🇺🇸 EN' },
  ];

  const handleToggle = (value: string) => {
    setLang(value as 'ru' | 'en');
  };

  return (
    <div style={{ position: 'fixed', top: '24px', right: '24px', zIndex: 100 }}>
      <SegmentedControl
        buttons={buttons}
        onToggle={handleToggle}
        selected={lang}
        fillWidth={false}
      />
    </div>
  );
}; 