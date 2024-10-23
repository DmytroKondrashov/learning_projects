console.log('request data...');

// Bad approach leading to callback hell
// setTimeout(()=> {
//   console.log('Preparing data...')

//   const backendData = {
//     server: 'aws',
//     port: 2000,
//     status: 'working',
//   };

//   // We have a callback hell here - each new callbeck will be nested inside the previous one
//   setTimeout(() => {
//     backendData.modified = true;
//     console.log('Data received', backendData);
//   }, 2000)
// }, 2000);

// Good approach using promises
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Preparing data...');
    const backendData = {
      server: 'aws',
      port: 2000,
      status: 'working',
    };
    resolve(backendData)
  }, 2000);
});

p.then((data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.modified = true;
      resolve(data);
    }, 2000);
  });
})
.then(clientData => {
  console.log('Data received', clientData);
  clientData.fromPromise = true;
  return clientData;
}).then(data => {
  console.log('Modified', data);
})
.catch(err => console.log(err))
.finally(() => console.log('Finally'));
