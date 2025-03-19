const obj = {
  a: 1,
  b: {
    c: { x: 111 },
  },
  d: "hello",
  e: null,
};

function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  const copyObj = {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copyObj[key] = deepCopy(obj[key]);
    }
  }

  return copyObj;
}

let copyObj = deepCopy(obj);
copyObj.b.c.x = 666;

console.log("исходный:");
console.log(obj);
console.log("копия:");
console.log(copyObj);
