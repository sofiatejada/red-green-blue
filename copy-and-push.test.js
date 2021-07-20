import copyAndPush from './copy-and-push';

describe('copyAndPush', () => {
  it('returns a new array with all the items in the original and a new item pushed to the end', () => {
    const alterEgoNames = ['Storm', 'Ghost', 'Sophie'];
    const expected = ['Storm', 'Ghost', 'Sophie', 'Sofia'];
    const actual = copyAndPush(alterEgoNames, 'Sofia');

    expect(actual).toEqual(expected);
  });

  it('returns a new array with all the items in the original and a new item pushed to the end, but original remains unchanged', () => {
    const alterEgoNames = ['Storm', 'Ghost', 'Sophie'];
    const expected = ['Storm', 'Ghost', 'Sophie', 'Sofia'];
    const actual = copyAndPush(alterEgoNames, 'Sofia');
    const actualOriginal = alterEgoNames;

    expect(actual).toEqual(expected);
    expect(actualOriginal).toEqual(alterEgoNames);
  });
});
