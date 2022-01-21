/***************************************** 实现new  *********************************/
/************************************************************************************/
//1 创建一个新对象，将对象的__proto__指向构造函数的原型对象
///2执行构造函数
// 3返回值为object类型则作为new方法的返回值返回，否则返回上述全新值
export const _new = () => {
  let obj = {};
  let [constructor, ...args] = [...arguments];
  obj.__proto__ = constructor.prototype;
  let result = constructor.apply(obj, args);
  if ((result && typeof result === 'function') || typeof result === 'object') {
    return result;
  }
  return obj;
};

/***************************************** 实现instanceof *********************************/
/************************************************************************************/
export const _instanceof = (left, right) => {
  while (left) {
    if (left.__proto__ == right.prototype) {
      return true;
    }
    left = left.__proto__;
  }
  return false;
};

/***************************************** 实现防抖 *********************************/
/************************************************************************************/
// 连续点击，取最后一次
export const _debounce = (fn, delay) => {
  let timer = null;
  return function () {
    if (timer) clearTimeout(timer);
    const args = arguments;
    timer = clearTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

/***************************************** 实现节流 *********************************/
/************************************************************************************/
//节流就是延迟时间内多次点击取第一次
export const _throttle = (fn, delay = 200) => {
  let flag = true;
  return function () {
    const args = arguments;
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fn.apply(this, args);
      flag = true;
    }, delay);
  };
};

/***************************************** 数组去重 *********************************/
/************************************************************************************/

//利用set值是唯一的特点
export const unique_1 = (arr) => {
  return [...new Set(arr)];
};
//filter,用indexof取数组中第一次出现的项
export const unique_2 = (arr) => {
  return arr.filter((item, index, Array) => {
    return arr.indexof(item) === index;
  });
};

//reduce,新建一个数组，已在数组中存在的元素不添加，否则加入该元素
export const unique_3 = (arr) =>
  arr.reduce((pre, item) => (pre.includes(item) ? [...pre] : [...pre, item]));
