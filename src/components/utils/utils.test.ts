import { describe, it, expect } from 'vitest';

import * as utils from './utils';

describe('Utils', () => {
  it('checks word match - true', () => {
    expect(utils.checkWordMatch('test', 'test')).toBeTruthy();
  });
  it('checks word match - false', () => {
    expect(utils.checkWordMatch('etst', 'test')).toBeFalsy();
  });
  it('gets the current guess', () => {
    expect(
      utils.getCurrentGuess(['r: 0', 'e: 0', 'a: 0', 'c: 0', 't: 0']),
    ).toBe('react');
  });
  it('checks character matches', () => {
    expect(utils.checkCharMatch('react', 'aetss')).toStrictEqual([
      'r: 0',
      'e: 2',
      'a: 1',
      'c: 0',
      't: 1',
    ]);
  });
});
