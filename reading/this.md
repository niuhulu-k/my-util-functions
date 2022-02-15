```javascript
function foo() {
 	console.log(this.a)
 }
 var a = 1
 foo()
 var obj = {
 	a: 2,
	foo: foo
    }
 obj.foo() 
 // 以上两者情况 `this` 只依赖于调用函数前的对象，优先级是第二个情况大于第一个情况
 //2 ##########################
 //以下情况是优先级最高的，'this'只绑定在C上
 var c = new foo()
 c.a = 3
 console.log(c.a)
 //3、利用call，apply，bind, 改变this,这个优先级仅次于new
 
 
 //4箭头函数没有this,这个函数的this只取决于他外面的第一个不是箭头函数的this,