import { describe, it } from 'vitest';
import { render } from '@testing-library/react';

import Button from './button';

describe('Button', () => {
  it('renders button', () => {
    render(<Button clickHandler={() => ''} />);
  });
});
