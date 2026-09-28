export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'dashboard-analytics',
    title: 'Dashboard Analytics',
    description:
      'Метрики в реальном времени, графики активности и гибкие фильтры для управления SaaS-платформой.',
    image: '/images/project-1.svg',
    tags: ['React', 'TypeScript', 'Tailwind', 'Recharts'],
    liveDemoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 'booking-flow',
    title: 'Booking Flow',
    description:
      'Пошаговый процесс бронирования услуг с интерактивным календарём и моментальным подтверждением.',
    image: '/images/project-2.svg',
    tags: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    liveDemoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 'task-manager',
    title: 'Task Manager',
    description:
      'Канбан-доска с drag-and-drop, фильтрами по приоритету и интеграцией с календарём.',
    image: '/images/project-3.svg',
    tags: ['React', 'TypeScript', 'Zustand', 'DnD Kit'],
    liveDemoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 'e-commerce',
    title: 'E-Commerce',
    description:
      'Каталог товаров с фильтрами, корзиной и оформлением заказа. Адаптивный дизайн.',
    image: '/images/project-4.svg',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Stripe'],
    liveDemoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
];
