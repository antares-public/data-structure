const array = [1, 2, 3, 4, 5, 7, 8, 9];
let count = 0;

function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (array[i] === item) {
      return i;
    }
  }

  return null;
}

console.log(linearSearch(array, 8));
console.log(`count: ${count}`);
