import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders hero and main portfolio sections', () => {
  render(<App />);

  expect(
    screen.getByRole('heading', { level: 1, name: /Привет, я Дмитрий/ })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { level: 2, name: 'Проекты' })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { level: 2, name: 'Навыки' })
  ).toBeInTheDocument();
});
