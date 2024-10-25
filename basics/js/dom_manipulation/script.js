const body = document.body
// Append a string
// We can use appendChild, but append is more modern and allows to work with strings
body.append('Hello world!', ' ', 'Hello again!');

// Append a new element
const div = document.createElement('div');
body.append(div);

// Add text to the element
const div2 = document.createElement('div')
// Two ways of addind text to the element
div2.innerText = 'Hello again!'
div2.textContent = 'Hello again!'
body.append(div2)

// selections the elements
const divs = document.querySelectorAll('div')
// To select span ith multiple classes:
// const span = document.querySelector('span.first.second');
console.log(divs)

// modify the elements
const div3 = document.querySelector('div')
// this will work, but this leaves a security risk, because it will execute any code in the string
// div3.innerHTML = '<strong>TEST</strong>'

// this is a better way to modify the element
const strong = document.createElement('strong')
strong.innerText = 'TEST'
div3.append(strong)

// remove the element
div3.removeChild(strong)
div3.remove()

// access attributes
const span = document.querySelector('span')
console.log(span.title)
console.log(span.id)
console.log(span.className)
span.setAttribute('id', 'hello')
span.id = 'test'
span.removeAttribute('id')
console.log(span.getAttribute('id'))

// get data attributes
console.log(span.dataset)
console.log(span.dataset.info)

// manipulate classes
console.log(span.classList)
span.classList.add('new-class')
span.classList.remove('new-class')
span.classList.toggle('new-class')
span.classList.contains('new-class')

// work with styles
span.innerText = 'Hello'
span.style.color = 'red'
span.style.fontSize = '2rem'