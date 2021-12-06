// 使用 foreach 实现浅拷贝

export const shallowCopy = (obj) => {
  const copy = Object.create(Object.getPrototypeOf(obj));
  const propNames = Object.getOwnPropertyNames(obj);
  propNames.forEach((name) => {
    const describe = Object.getOwnPropertyDescriptor(obj, name);
    Object.defineProperty(copy, name, describe);
  });
  return copy;
};
