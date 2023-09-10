import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import Game from './game';

describe('Game', async () => {
  it('renders game', () => {
    render(<Game />);
  });

  it('handles enter, guess is not complete', () => {
    render(<Game />);
    fireEvent.keyDown(window, { key: 'Enter' });
  });

  it('handles enter, displays new game button', async () => {
    vi.mock('../utils/utils', async () => {
      const actual = await vi.importActual('../utils/utils');
      return {
        ...(actual as object),
        getWord: () => 'react',
      };
    });
    render(<Game />);
    fireEvent.keyDown(window, { key: 'r' });
    fireEvent.keyDown(window, { key: 'e' });
    fireEvent.keyDown(window, { key: 'a' });
    fireEvent.keyDown(window, { key: 'c' });
    fireEvent.keyDown(window, { key: 't' });
    fireEvent.keyDown(window, { key: 'Enter' });
    await waitFor(() => {
      const button = screen.getByRole('button', { name: /new game/i });
      expect(button).not.toBeDisabled();
    });
  });

  it('handles enter, incorrect guess', async () => {
    const utils = await import('../utils/utils');
    utils.getWord = vi.fn().mockReturnValueOnce('tests');
    render(<Game />);
    fireEvent.keyDown(window, { key: 'r' });
    fireEvent.keyDown(window, { key: 'e' });
    fireEvent.keyDown(window, { key: 'a' });
    fireEvent.keyDown(window, { key: 'c' });
    fireEvent.keyDown(window, { key: 't' });
    fireEvent.keyDown(window, { key: 'Enter' });
    await waitFor(() => {
      const disabledButton = screen.getByRole('button', { name: /new game/i });
      expect(disabledButton).toBeDisabled();
    });
  });
});
