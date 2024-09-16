import {sum} from 'demo/jest-demo';

describe('sum() returns', () => {
  it('sum of two numbers', () => {
    expect(sum(2, 2)).toBe(4);
  });
});
