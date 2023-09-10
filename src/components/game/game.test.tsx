import { describe, it } from 'vitest';
import { render } from '@testing-library/react';

import Game from './game';

describe('Game', () => {
  it('renders game', () => {
    render(<Game />);
  });
});
