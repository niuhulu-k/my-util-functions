function.prototype.myApply = function () {
    //取参数
    let [thisArg, arg] = [...arguments]
    // 定义对象，把传入对象赋值给thisArg
    thisArg = Object(thisArg)
    let fn = Symbol()
    // 将函数添加到对象上
    thisArg[fn] = this
    // 执行函数
    let result = thisArg[fn](...arg)
    //删除该属性
    delete thisArg.fn
    return result
}