import capitalizeAndFilter from './capitalize-and-filter';

describe('capitalizeAndFilter', () => {
  it('takes an array of strings, capitalizes it, and filters out any string that starts with the letter F/f', () => {
    const someArray = ['pikachu', 'fearow', 'solgaleo', 'necrozma', 'fomantis'];
    const expected = ['FEAROW', 'FOMANTIS'];
    const actual = capitalizeAndFilter(someArray);

    expect(actual).toEqual(expected);
  });
});
