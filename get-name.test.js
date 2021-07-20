import getName from './get-name.js';

describe('getName', () => {
  it('returns the name property of an object', () => {
    const alterEgo = { name: 'Storm', starter: 'Popplio', region: 'Alola' };
    const expected = 'Storm';
    const actual = getName(alterEgo);

    expect(actual).toEqual(expected);

  });
});
