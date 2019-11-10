const isEven = n => n % 2 === 0;

const res = R.filter(isEven, [1, 2, 3, 4]);
console.log(res)