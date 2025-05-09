// Crazy callback hell
// const fetchData = callback => {
//   setTimeout(() => {
//     console.log('Fetching data...');
//     callback('Done!');
//   }, 1500);
// };

// setTimeout(() => {
//   console.log('Timer is done');
//   fetchData(text => {
//     console.log(text);
//   });
// }, 2000);

// Promises
const fetchData = () => {
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      console.log('Fetching data...');
      res('Done!');
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log('Timer is done');
  fetchData().then(text => {
    console.log(text);
    return fetchData();
  }).then(text2 => {
    console.log(text2);
  })
}, 2000)