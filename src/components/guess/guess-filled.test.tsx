import { describe, it } from 'vitest';
import { render } from '@testing-library/react';

import Guess from './guess-filled';

describe('Guess', () => {
  it('renders a guess with classes indicating character matches', () => {
    render(
      <Guess guess={['r: 0', 'e: 2', 'a: 1', 'c: 0', 't: 1']} win={false} />,
    );
  });
});
