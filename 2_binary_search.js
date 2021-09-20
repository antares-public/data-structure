const array = [1, 2, 3, 4, 5, 7, 8, 9];
let count = 0;

function binarySearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    let start = 0;
    let end = array.length;
    let middle;
    let found = false;
    let position = -1;

    while (!found && start <= end) {
      count += 1;
      middle = Math.floor((start + end) / 2);
      if (array[middle] === item) {
        found = true;
        position = middle;
        return position;
      }

      if (item < array[middle]) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    }
  }
  return position;
}

console.log(binarySearch(array, 1));
console.log(`count: ${count}`);
