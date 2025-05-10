// uncomment for fun :)

// export function load({ setHeaders }) {
//   setHeaders({
//     'Content-Type': 'text/plain'
//   }) 
// }

export function load({ cookies }) {
  const visited = cookies.get('visited')

  return {
    visited: visited === 'true'
  }
}
