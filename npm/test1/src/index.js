const babel = require('@babel/core');
babel.transform("code", options);

const fn = () => 1; // 箭头函数, 返回值为1
console.log(fn());

// exports.showMsg = function () {
// let a = 111;
// console.log("This is my first module", a);
// };


var num = Math.pow(3, 2);

var foo = function foo(a, b, c) {
  console.log('a:', a);
  console.log('b:', b);
  console.log('c:', c);
};

foo(1, 3, 4);
console.log(fn());
console.log(num);