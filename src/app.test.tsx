import { describe, it } from 'vitest';
import { render } from '@testing-library/react';

import App from './app';

describe('Game', () => {
  it('renders game', () => {
    render(<App />);
  });
});
