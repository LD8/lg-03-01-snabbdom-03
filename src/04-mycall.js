/**
 * 分析fn.call()的逻辑
 */

const fn1 = () => console.log(1);
const fn2 = () => console.log(2);

// fn1.call(fn2);
// fn1.call.call(fn2);

Function.prototype.myCall = function (context, ...args) {
  // 非严格模式下
  context = context || window;
  context.fn = this; // 这里的 this 是调用 myCall 的函数
  const result = context.fn(...args);
  delete context.fn;
  return result;
}

// 使用箭头函数报错：TypeError: context.fn is not a function
// Function.prototype.myArrow = (context, ...args) => {
//   // 非严格模式下
//   context = context || window;
//   context.fn = this;
//   const result = context.fn(...args);
//   delete context.fn;
//   return result;
// };

// fn1.myCall(fn2);
fn1.myCall.myCall(fn2);

// fn1.myArrow(fn2);
// fn1.myArrow.myArrow(fn2);
