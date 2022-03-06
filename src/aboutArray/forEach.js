// for-of 可以遍历各种集合对象的属性值，要求被遍历的对象需要实现迭代器 (iterator) 方法
var getNumbers = () => {
    return Promise.resolve([1, 2, 3])
  }
  var multi = num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (num) {
          resolve(num * num)
        } else {
          reject(new Error('num not specified'))
        }
      }, 1000)
    })
  }
  async function test () {
    var nums = await getNumbers()
    for(let x of nums) {
      var res = await multi(x)
      console.log(res)
    }
  }
  test()
  