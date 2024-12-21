(function() {
  console.log(1)

  setTimeout(function() {console.log(2)}, 1000)

  var prom = new Promise((res) => res(5))
  prom.then((v) => { console.log(v) })

  setTimeout(function() {console.log(3)}, 0)

  console.log(4)
})();

//Correct: 1, 4, 5, 3, 2