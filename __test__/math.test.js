// fake tests for jest
const add = require('../math.js');

test('Fake test', () => {
  expect(true).toBeTruthy();
});

describe('Setting up jest', () => {
  it('adds numbers', () => {
    expect(add(1, 2)).toEqual(3);
    expect(add(2, 3)).toEqual(5);
  });
});