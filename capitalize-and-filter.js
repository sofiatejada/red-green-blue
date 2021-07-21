const capitalizeAndFilter = (arr) => {
//   const accum = [];
//   for(const item of arr) {
//     if(item[0] === 'f') {
//       const capitalized = item.toUpperCase();
//       accum.push(capitalized);
//       console.log(accum);
//     }
//   }
//   return accum;

  const filteredArr = arr.filter(item => (item[0] !== 'f'));
  const capitalizedFilteredArr = filteredArr.map(item => item.toUpperCase());
  return capitalizedFilteredArr;
};

export default capitalizeAndFilter;
