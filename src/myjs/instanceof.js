export const myInstanceOf = (l, r) => {
  let o = r.prototype;
  l = l._proto_;
  while (true) {
    if (l === null) return false;
    if (l === o) return true;
    l = l._proto_;
  }
};
 // instanceof
 // obj instanceof constructor
 // 判断函数的原型属性是否能在对象的原型连上找到
 