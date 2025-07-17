import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Connect with me link', () => {
  render(<App />);
  const linkElement = screen.getByText(/connect with me/i);
  expect(linkElement).toBeInTheDocument();
});
