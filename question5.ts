let arr: number[] = [];
for (let i = 0; i < 100000; i++) {
  arr.push(i);
  arr.push(i);
}
// method 1:
console.time('set');
const fixedArray = Array.from(new Set(arr));
console.timeEnd('set');
// method 2:
console.time('temp');
let temp: number[] = [];
for (let num of arr) {
  if (!temp.includes(num)) {
    temp.push(num);
  }
}
console.timeEnd('temp');
//Which is faster?

//Hard level
