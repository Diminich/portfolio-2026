export const NAME = 'Дмитрий';

export const GITHUB_URL = 'https://github.com';
export const LINKEDIN_URL = 'https://linkedin.com';
export const TELEGRAM_URL = 'https://telegram.org';
export const EXAMPLE_URL = 'https://example.com';

export const EMAIL = 'hello@example.com';
export const MAILTO_URL = `mailto:${EMAIL}`;

export const SECTION_IDS = {
  top: 'top',
  about: 'about',
  skills: 'skills',
  projects: 'projects',
  experience: 'experience',
  contact: 'contact',
} as const;

export const SOCIAL_LINKS = [
  { label: 'GitHub', href: GITHUB_URL, ariaLabel: 'GitHub' },
  { label: 'LinkedIn', href: LINKEDIN_URL, ariaLabel: 'LinkedIn' },
  { label: 'Telegram', href: TELEGRAM_URL, ariaLabel: 'Telegram' },
] as const;