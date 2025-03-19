const arr = [
  { name: "Bob", age: "25" },
  { name: "Ann", age: "30" },
  { name: "Tom", age: "35" },
];

const fn = (key) => {
  return (obj) => console.log(obj[key]);
};

arr.forEach(fn("name")); // Bob, Ann, Tom
arr.forEach(fn("age")); // 25, 30, 35
