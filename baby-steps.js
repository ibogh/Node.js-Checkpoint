const num = process.argv.slice(2);
const sum = num.reduce((acc, num) => {
  return acc + +num;
}, 0);
console.log(sum);
