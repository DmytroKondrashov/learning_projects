const delay = (ms) => {
  return new Promise((r) => {
    setTimeout(() => r(), ms);
  })
}

const url = 'https://jsonplaceholder.typicode.com/todos'

// ============================== PROMISES ==============================
// function fetchTodos() {
//   console.log('Fetching todos...');
//   return delay(2000).then(() => {
//     return fetch(url)
//   }).then(res => res.json())
// }

// fetchTodos().then(data => {console.log(data)})
// .catch(err => console.log(err))

// ============================== ASYNC AWAIT ==============================
async function fetchAsyncTodos(url) {
  console.log('Fetching todos...');
  try {
    await delay(2000);
    const response = await fetch(url);
    const data = response.json();
    return data; 
  } catch (error) {
    console.error(error);
  } finally {
    console.log('Finally');
  }
}

fetchAsyncTodos(url).then(data => console.log(data))
