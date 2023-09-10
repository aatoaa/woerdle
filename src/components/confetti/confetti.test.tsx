import { describe, it } from 'vitest';
import { render } from '@testing-library/react';

import Confetti from './confetti';

describe('Confetti', () => {
  it('renders confetti - enabled', () => {
    render(<Confetti enable={true} />);
  });

  it('renders confetti - not enabled', () => {
    render(<Confetti enable={false} />);
  });
});
