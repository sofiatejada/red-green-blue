import fetch from 'node-fetch';

const fetchQuotes = async () => {
  const data = await fetch('http://futuramaapi.herokuapp.com/api/quotes');
  const body = await data.json();
  const quote = {
    name: body[0].character,
    text: body[0].quote,
    image: body[0].image,
  };
  console.log(quote);
};

export default fetchQuotes;
