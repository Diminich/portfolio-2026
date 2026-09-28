export interface Experience {
  id: string;
  role: string;
  period: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    id: 'volunteer',
    role: 'Volunteer Frontend Developer',
    period: '2024 — 2025',
    description:
      'Разработка открытых образовательных платформ в команде волонтёров. Регулярное менторство и код-ревью от ex-Google инженера.',
  },
  {
    id: 'fullstack-open',
    role: 'Full Stack Open',
    period: '2024',
    description:
      'Углублённый практический курс от University of Helsinki по современной веб-разработке: React, Express, Node, MongoDB.',
  },
  {
    id: 'scrimba',
    role: 'Scrimba Advanced Frontend',
    period: '2023',
    description:
      'Интерактивное обучение продвинутым техникам создания пользовательских интерфейсов и анимаций.',
  },
];