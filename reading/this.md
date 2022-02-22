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
// 在一个函数上下文中，this由调用者提供，由调用函数的方式来决定。如果调用者函数，被某一个对象所拥有，那么该函数在调用时，内部的this指向该对象。如果函数独立调用，那么该函数内部的this，则指向undefined。但是在非严格模式中，当this指向undefined时，它会被自动指向全局对象。

function fn() {
  'use strict';
  console.log(this);
}

fn();  // fn是调用者，独立调用
window.fn();  // fn是调用者，被window所拥有


// https://www.jianshu.com/p/d647aa6d1ae6