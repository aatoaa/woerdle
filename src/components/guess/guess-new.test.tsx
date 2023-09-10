import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import NewGuess from './guess-new';

describe('New guess', () => {
  it('renders a new active guess row', () => {
    render(<NewGuess />);
  });

  it('handles a key press', () => {
    render(<NewGuess />);
    fireEvent.keyDown(window, { key: 'a' });
    const newKey = screen.getByText(/a/i);
    expect(newKey).toBeInTheDocument();
  });

  it('handles backspace', () => {
    render(<NewGuess />);
    fireEvent.keyDown(window, { key: 'a' });
    fireEvent.keyDown(window, { key: 'Backspace' });
    const newKey = screen.queryByText(/a/i);
    expect(newKey).toBeNull();
  });

  it('handles enter, guess is not complete', () => {
    render(<NewGuess />);
    fireEvent.keyDown(window, { key: 'a' });
    fireEvent.keyDown(window, { key: 'Enter' });
  });

  it('ignores keys outside a-zA-Z', () => {
    render(<NewGuess />);
    fireEvent.keyDown(window, { key: '1' });
    const newKey = screen.queryByText(/1/i);
    expect(newKey).toBeNull();
  });
});
