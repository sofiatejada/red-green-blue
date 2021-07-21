import fetchQuotes from './futurama';

describe('fetchQuotes', () => {
  it('returns a single quote from the futurama api', async () => {
    const quote = await fetchQuotes();

    expect(quote).toEqual(
      {
        name: expect.any(String),
        text: expect.any(String),
        image: expect.any(String),
      }
    );
  });
});

