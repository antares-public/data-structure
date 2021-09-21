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

const linearSearchShort = (array, item) => {
  let result = [];
  array.map((e, i) => {
    count += 1;
    return e === item && result.push(i);
  });
  return result[0];
};

const linearSearchTest = (array, item) => {
  let result;
  array.map((e, i) => {
    count += 1;
    if (e === item) {
      result = i;
    }
  });
  return result;
};

const linearSearchEntries = (list, item) => {
  for (const [i, element] of list.entries()) {
    count += 1;
    if (element === item) {
      return i;
    }
  }
};

console.log(linearSearchTest(array, 8));
console.log(`count: ${count}`);
