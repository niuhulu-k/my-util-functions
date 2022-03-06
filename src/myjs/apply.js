function.prototype.myApply = function () {
    //判断是否为类数组
    function isArrayLike(o) {
        if (o &&                                    // o不是null、undefined等
            typeof o === 'object' &&                // o是对象
            isFinite(o.length) &&                   // o.length是有限数值
            o.length >= 0 &&                        // o.length为非负值
            o.length === Math.floor(o.length) &&    // o.length是整数
            o.length < 4294967296)                  // o.length < 2^32
            return true
        else
            return false
    }
    //取参数
    let [thisArg, arg] = [...arguments]
    // 定义对象，把传入对象赋值给thisArg
    thisArg = Object(thisArg)
    let fn = Symbol()
    // 将函数添加到对象上
    thisArg[fn] = this
    // 执行函数
   let result
    if(arg){
        //是否传递第二ge
        if(!Array.isArray(arg)&&!isArrayLike(arg)){
            throw new TypeError('myApply 第二个参数不为数组并且不为类数组对象抛出错误');
        }else{
            arg = Array.from(args)
            result = context[fn](...args)
        }
    }else{
       result = result = context[fn]();
    }
 
    //删除该属性
    delete thisArg.fn
    return result
}
