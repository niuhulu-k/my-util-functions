function.prototype.myCall = function(context,...args){
   if(context ==null||context==undefined){
       context = window
   }else{
       context = Object(context)
   }
   let fn = Symbol()
   context[fn] = this
   let result  = context[fn](...args)
   delete  context.fn
   return result
}