function hashStringToNumber(s, tableSize) {
  // You ned to pick the prime number (a number that divides evenly only by 1 and by itself)
  let hash = 17;

  for (let i = 0; i < s.length; i++) {
    // 13 is also a prime number
    hash = (13 * hash * s.charCodeAt(i)) % tableSize;
  }

  return hash;
}

class HashTable {
  // set the array size to 17 (this is another prime number)
  table = new Array(17);

  setItem = (key, value) => {
    const idx = hashStringToNumber(key, this.table.length);
    if (this.table[idx]) {
      this.table[idx].push([key, value]);
    } else {
      this.table[idx] = [[key, value]];
    }
  }

  getItem = (key) => {
    const idx = hashStringToNumber(key, this.table.length);
    if (!this.table[idx]) {
      return null;
    }
    return this.table[idx].find((x) => x[0] === key)[1];
  }
}

const myTable = new HashTable();

myTable.setItem("name", "John");
myTable.setItem("age", 25);
console.log(myTable.getItem("name"));
console.log(myTable.getItem("age"));
