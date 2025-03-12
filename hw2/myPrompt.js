const myPrompt = function () {
  const num = prompt("Введите число");
  if (!Number.isInteger(Number(num))) {
    alert("Некорректный ввод");
    return;
  }
  const base = prompt("Введите систему счисления для числа");
  if (
    !Number.isInteger(Number(base)) ||
    Number(base) < 2 ||
    Number(base) > 36
  ) {
    alert("Некорректный ввод");
    return;
  }
  const convertedNum = Number(num).toString(Number(base));
  alert(`Ответ: число ${num} в ${base}-ой системе счисления = ${convertedNum}`);
};
