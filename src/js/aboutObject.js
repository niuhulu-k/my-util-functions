// new操作
//创建一个新对象obj，这个新对象的_proto要指向构造函数的原型对象
//执行构造函数，讲constructor指给obj
//返回值为objet类型则作为new方法的返回值返回，否则返回上述全新对象
export const _new = () => {
  let obj = {};
  let [constructor, ...args] = [...arguments];
  obj._proto_ = constructor.prototype;
  let result = constructor.apply(obj, args);
  if (result && (typeof result === 'function' || typeof result === 'object')) {
    return result;
  }
  return obj;
};

// 使用call/apply将arguments转换为数组, 返回结果为数组，arguments自身不会改变
var arg = [].slice.call(arguments);
