// O(1)
function getLastElement(arr) {
  return arr[arr.length - 1];
}

// O(n)
function gtSumOfArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

// O(log n) - binary search

// O(n log n)

// O(n^2) | O(n^3)
function getMultiplyList(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(`${i} * ${j} = ${i * j}`);
    }
  }
}

// O(2n)
function getFib(n) {
  if (n < 2) {
    return n;
  }

  return getFib(n - 1) * getFib(n - 2);
}

// O(N!)