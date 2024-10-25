const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child')

// ================================== log the event and it's target ==================================
// grandparent.addEventListener('click', (e) => {
//   console.log(e)
//   console.log(e.target)
// })

// ================================== event capturing ==================================
// events are bubbling from the depts to the surface (child to grandparent and to document)
// catching goes from the surface to the depts (document to grandparent and to child)
// document.addEventListener('click', () => {
//   console.log('document clicked')
// })

// // the first log will be from the document because it's the first to catch the event (even before the event bubbling)
// grandparent.addEventListener('click', () => {
//   console.log('grandparent clicked')
// }, { capture: true })

// parent.addEventListener('click', () => {
//   console.log('parent clicked')
// })

// child.addEventListener('click', () => {
//   console.log('child clicked')
// })

// ================================== event bubbling and catching order ==================================
// events are bubbling from the depts to the surface (child to grandparent and to document)
// catching goes from the surface to the depts (document to grandparent and to child)
// grandparent.addEventListener('click', () => {
//   console.log('grandparent catching')
// }, { capture: true })

// parent.addEventListener('click', () => {
//   console.log('parent catching')
// }, { capture: true })

// child.addEventListener('click', () => {
//   console.log('child catching')
// }, { capture: true })

// grandparent.addEventListener('click', () => {
//   console.log('grandparent event')
// })

// parent.addEventListener('click', () => {
//   console.log('parent event')
// })

// child.addEventListener('click', () => {
//   console.log('child event')
// })

// ================================== stop propagation ==================================
//  now the event will stop at the parent catching and won't catch of bubble any further
// grandparent.addEventListener('click', () => {
//   console.log('grandparent catching')
// }, { capture: true })

// parent.addEventListener('click', (e) => {
//   console.log('parent catching')
//   e.stopPropagation()
// }, { capture: true })

// child.addEventListener('click', () => {
//   console.log('child catching')
// }, { capture: true })

// grandparent.addEventListener('click', () => {
//   console.log('grandparent event')
// })

// parent.addEventListener('click', () => {
//   console.log('parent event')
// })

// child.addEventListener('click', () => {
//   console.log('child event')
// })

// ================================== if you need to run event only once ==================================
// grandparent.addEventListener('click', () => {
//   console.log('grandparent clicked')
// })

// parent.addEventListener('click', () => {
//   console.log('parent clicked')
// }, { once: true })

// child.addEventListener('click', () => {
//   console.log('child clicked')
// })

// ================================== remove event listener ==================================
// grandparent.addEventListener('click', printHi)

// setTimeout(() => {
//   grandparent.removeEventListener('click', printHi)
// }, 3000)

// parent.addEventListener('click', () => {
//   console.log('parent clicked')
// })

// child.addEventListener('click', () => {
//   console.log('child clicked')
// })

// function printHi() {
//   console.log('HI')
// }

// ================================== event delegation ==================================
const divs = document.querySelectorAll('div')

divs.forEach(div => {
  div.addEventListener('click', () => {
    console.log('div clicked')
  })
})

// this div will not have event listeners because it's not in the dom yet
const newDiv = document.createElement('div')
newDiv.style.width = '200px'
newDiv.style.height = '200px'
newDiv.style.backgroundColor = 'violet'
document.body.appendChild(newDiv)

// but the event handler that was delegated to all divs will handle our new div as well
document.addEventListener('click', (e) => {
  if(e.target.matches('div')) {
    console.log('hi!')
  }
})