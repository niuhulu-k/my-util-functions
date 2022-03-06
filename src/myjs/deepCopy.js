export const deepCopy = (source) => {
  // 判断参数是数组还是对象
  let targetList = source.constructor === Array ? [] : {};
  for (let keys in source) {
    if (source.hasOwnProperty(keys)) {
      if (source[keys] && typeof source[keys] === 'object') {
        targetList[keys] = deepCopy(source[keys]);
      } else {
        targetList[keys] = source[keys];
      }
    }
  }
  return targetList;
};

// JSON.stringify/parse
// 可以实现深拷贝，但是undefined、function、symbol 会在转换过程中被忽略。。。
