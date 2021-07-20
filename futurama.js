import fetch from 'node-fetch';

const fetchQuotes = async () => {
  const data = await fetch('http://futuramaapi.herokuapp.com/api/quotes');
  const body = await data.json();
  
  console.log(body);
  return body;
};

export default fetchQuotes;
