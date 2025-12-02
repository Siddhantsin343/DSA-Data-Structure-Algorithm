// Find Second Largest Number in an array

let arr = [4, 9, 0, 2, 8, 7, 1];

function seconLar(arr) {
  let firstLarg = -Infinity;
  let secondLarg = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLarg) {
      secondLarg = firstLarg;
      firstLarg = arr[i];
    } else if (arr[i] > secondLarg) {
      secondLarg = arr[i];
    }
  }
  return secondLarg;
}

let answer = seconLar(arr);
console.log(answer);
