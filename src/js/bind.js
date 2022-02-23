if (!Function.prototype.bind) {
  Function.prototype.bind = function (context,...args) {
    if (typeof this !== 'function') {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError(
        'Function.prototype.bind - what is trying to be bound is not callable',
      );
    }
    if(context ==null||context==undefined){
        context = window
    }else{
        context = Object(context)
    }
    const fn = Symbol()
   context[fn] = this
   let fnStr= 'context.fn('
   args.forEach((item,index)=>{
    fnStr+=args.length-index==1?item[index]:item[index]+','
   })
   fnStr+= ')'
    let res = eval(fnStr)
    delete context.fn
    return res
   
  };
}
