function add(a) {
  let sum = a;

  function inner(b) {
    if (b === undefined) {
      return sum;
    }

    sum += b;
    return inner;
  }

  return inner;
}

console.log(add(5)(-3)(2)());
console.log(add(1)(2)(3)(4)(5)());
