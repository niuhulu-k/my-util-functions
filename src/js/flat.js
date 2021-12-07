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

export const eachFlat = (arr = [], depth = 1) => {
  const res = [];
  (function flatten(arr, depth) {
    arr.forEach((item) => {
      if (Array.isArray(item) && depth > 0) {
        flatten(item, depth - 1);
      } else {
        res.push(item);
      }
    });
  })(arr, depth);
  return res;
};

// for of 循环不能去除数组空位，需要手动去除
export const forFlat = (arr = [], depth = 1) => {
  const res = [];
  (function flatten(arr, depth) {
    for (let item of arr) {
      if (Array.isArray(item) && depth > 0) {
        flatten(item, depth - 1);
      } else {
        item !== void 0 && res.push(item);
      }
    }
  })(arr, depth);
  return res;
};
