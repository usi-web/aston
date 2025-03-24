function memoize(callback) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify([...args].sort((a, b) => a - b));
    console.log(key);
    console.log("cache before ", cache);

    if (cache[`${key}`] !== undefined) {
      console.log("Get from cache");
      return cache[`${key}`];
    }

    console.log("First calculation");
    const result = callback(...args);
    cache[`${key}`] = result;
    console.log("cache after ", cache);

    return result;
  };
}

const sum = (...nums) => nums.reduce((acc, num) => acc + num, 0);
const memoizedSum = memoize(sum);

console.log(memoize(memoizedSum(2, -4, 5)));
console.log(memoize(memoizedSum(5, -4, 2)));
