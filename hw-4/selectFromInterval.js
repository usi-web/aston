function selectFromInterval(arr, a, b) {
  if (!Array.isArray(arr)) {
    return console.log("first parameter must be an array!");
  }
  if (!arr.every((elem) => typeof elem === "number")) {
    return console.log("There are not only numbers in the array!");
  }
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return console.log("incorrect input parameters!");
  }

  let selectedArr = arr.filter((elem) => {
    if (a <= b) {
      return elem >= a && elem <= b;
    } else {
      return elem >= b && elem <= a;
    }
  });

  return selectedArr.sort((a, b) => a - b);
}

// let newArr = selectFromInterval([5, 3, 2, 3, 4, 5], 3, 5);

// console.log(newArr);
