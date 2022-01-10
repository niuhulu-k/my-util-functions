//&&&&&&&&&&&&&&&&&&&&&&&&&&&&数组遍历//&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//1for
//2forEach   callback 每次返回 underfined 值，
//不可链式调用。forEach() 被调用时，不会改变原数组，也就是调用它的数组
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

//parseInt接受两个参数第一个是需要转换的数，第二个是转换标准
export const returnInt = (element) => {
  return parseInt(element, 10);
};

///[1，3，4].map(parseInt)

// for of for...of语句在可迭代对象（包括 Array，Map，Set，String，TypedArray，arguments 对象等等）上，可以正确响应break、continue和return语句
Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () {};

let iterable = [3, 5, 7];
iterable.foo = 'hello';

for (let i in iterable) {
  console.log(i); // logs 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (let i in iterable) {
  if (iterable.hasOwnProperty(i)) {
    console.log(i); // logs 0, 1, 2, "foo"
  }
}

for (let i of iterable) {
  console.log(i); // logs 3, 5, 7
}

// 用filter实现数组搜索

export const filterArray = (query, array) => {
  return array.filter(
    (item) => item.toLowerCase().indexOf(query.toLowerCase()) > -1,
  );
};

// every() 当所有条件都满足时返回 true, some() ,当有一个条件返回 true 就返回 true;

// 用 reduce 计算每个元素出现的次数

export const frequency = (array) => {
  return array.reduce(
    (allNames, name) => {
      if (name in allNames) {
        allNames[name]++;
      } else {
        allNames[name] = 1;
      }
      return allNames;
    },

    {},
  );
};

// 用 reduce 数组去重

export const deleteTheSame = (array) => {
  return array.reduce(function (pre, current) {
    if (pre.indexOf(current) === -1) {
      pre.push(current);
    }
    return pre;
  }, []);
};
export const deleteSame = (array) => {
  return array.reduce(function (pre, current) {
    if (pre.length === 0 || pre[pre.length - 1] !== current) {
      pre.push(current);
    }
    return pre;
  }, []);
};

// 管道函数,多个函数遍历组合
export const pipe =
  (...functions) =>
  (input) => {
    return functions.reduce((pre, fn) => fn(pre), input);
  };

// find() 方法返回数组中满足提供的测试函数的第一个元素的值,如果数组中没有任何元素返回 true，返回 undefined。
export const myFind = (arr) => {
  return arr.find((element) => element > 1);
};

// findIndex() 方法返回数组中满足提供的测试函数的第一个元素的索引。如果数组中没有任何元素返回 true，则 findIndex 返回 -1。
export const myFindIndex = (arr) => {
  return arr.findIndex((element) => element > 1);
};

//ES6 提供三个新的方法 —— entries()，keys()和values() —— 用于遍历数组。它们都返回一个遍历器对象，可以用for...of循环进行遍历，唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历
// for (let i in array.keys()){
//   console.log(i)
// }
