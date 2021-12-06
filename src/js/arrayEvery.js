//&&&&&&&&&&&&&&&&&&&&&&&&&&&&数组遍历//&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//1for
//2forEach   callback 每次返回 underfined 值，不可链式调用。forEach() 被调用时，不会改变原数组，也就是调用它的数组
//***************已删除或者未初始化的项将被跳过（例如在稀疏数组上）。
//forEach的this使用
//
//略过three
// var words = ['one', 'two', 'three', 'four'];
// words.forEach(function(word) {
//   console.log(word);
//   if (word === 'two') {
//     words.shift();
//   }
// });
// // one
// // two
// // four

export const myForEach = function (array) {
  array.forEach(function (item) {
    this.sum += item;
    ++this.count;
  }, this);
};

//数组扁平化
export const flatten = (arr) => {
  const result = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) result.push(...flatten(item));
    else result.push(item);
  });
  return result;
};

//array.prototype.flat(n)
export const flatDeep = (arr, d = 1) => {
  return d > 0
    ? arr.reduce(
        (acc, val) =>
          acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val),
        [],
      )
    : arr.slice();
};

//使用 foreach 扁平化

export const eachFlat = (arr = [], depth = 1) => {};
