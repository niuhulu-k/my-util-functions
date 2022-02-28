function _new() {
  // 取构造函数
  let constructor = [].prototype.shift.call(arguments);
  // 将构造函数的原型赋值给新对象
  let obj = Object.creat(constructor.prototype);
  // 将构造函数的this指向新对象,执行构造函数的代码（为新对象添加属性）
  let res = constructor.apply(obj, arguments);
  return res instanceof Object ? res : obj;
}
