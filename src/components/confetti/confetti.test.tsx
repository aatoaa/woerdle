import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Confetti from './confetti';

describe('Confetti', () => {
  it('renders confetti - not enabled', () => {
    render(<Confetti enable={false} />);
  });

  it('renders confetti - enabled', () => {
    render(<Confetti enable={true} />);
  });
});
