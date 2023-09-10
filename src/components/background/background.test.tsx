import { describe, it } from 'vitest';
import { render } from '@testing-library/react';

import Background from './background';

describe('Background', () => {
  it('renders background', () => {
    render(<Background />);
  });
});
