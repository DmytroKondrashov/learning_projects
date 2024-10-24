const requestUrl = 'https://jsonplaceholder.typicode.com/users'

// ================================================ REQUEST USING XMLHTTPREQUEST ================================================
function sendRequest(method, url, body = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.responseType = 'json';
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.onload = () => {
      // if no xhr.responseType = 'json'
      // console.log(JSON.parse(xhr.response))
      resolve(xhr.response)
    }
    xhr.onerror = () => {
      reject(xhr.response)
    }
    xhr.send(JSON.stringify(body))
  })
}

// sendRequest('GET', requestUrl).then((data) => console.log(data)).catch((error) => console.log(error));
// sendRequest('POST', requestUrl, { name: 'Alex' }).then((data) => console.log(data)).catch((error) => console.log(error));


// ================================================ REQUEST USING FETCH ================================================
function sendRequest(method, url, body = null) {
  return fetch(url, {
    method,
    body: JSON.stringify(body),
    headers: {
      'content-Type': 'application/json'
    }
  }).then(response => {
    return response.json()
  })
}

// sendRequest('GET', requestUrl).then((data) => console.log(data)).catch((error) => console.log(error));
sendRequest('POST', requestUrl, { name: 'Alex' }).then((data) => console.log(data)).catch((error) => console.log(error));
