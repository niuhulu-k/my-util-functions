## prototype 被定义为：给其它对象提供共享属性的对象。
当某个对象，承担了为其它对象提供共享属性的职责时，它就成了该对象的 prototype。当它失去这个职能（比如子对象的原型被设置为其它对象），它就不叫该对象的 prototype。

凡是通过 new Function() 创建的对象都是函数对象，其他的都是普通对象。f1,f2,归根结底都是通过 new Function()的方式进行创建的。Function Object 也都是通过 New Function()创建的。

