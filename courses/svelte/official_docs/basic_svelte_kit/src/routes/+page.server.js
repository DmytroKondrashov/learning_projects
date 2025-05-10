// uncomment for fun :)

// export function load({ setHeaders }) {
//   setHeaders({
//     'Content-Type': 'text/plain'
//   }) 
// }

// export function load({ cookies }) {
//   const visited = cookies.get('visited');

//   cookies.set('visited', 'true', {path: '/'});

//   return {
//     visited: visited === 'true'
//   }
// }

import * as db from '$lib/server/database';

export function load({ cookies }) {
  let id = cookies.get('userId');

  if(!id) {
    id = crypto.randomUUID();
    cookies.set('userId', id, {path: '/'});

    return {
      todos: db.getTodos(id)
    }
  }
}
