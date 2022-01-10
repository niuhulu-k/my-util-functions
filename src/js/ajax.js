// 指的是通过 JavaScript 的 异步通信，从服务器获取 XML 文档从中提取数据，再更新当前网页的对应部分，而不用刷新整个网页。
const url = '/server';
//创建http请求
let xhr = new XMLHttpRequest();
xhr.open('GET', url, true); //最后一个参数代表是否异步通信

//设置状态监听函数
xhr.onreadystatechange = function () {
  if (this.readyState !== 4) return;
  if (this.status === 200) {
    console.log(this.response);
  } else {
    console.error(this.statusText);
  }
};
//设置请求失败的监听函数

xhr.onerror = function () {
  console.error(this.statusText);
};

//设置请求头
xhr.responseType = 'json';
xhr.setRequestHeader('Accept', 'application/json');
xhr.send();

//使用Promise封装AJAX：

function myAjax() {
  let promise = new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open('Get', rul, true);
    xhr.onreadystatechange = function () {
      if (this.readyState !== 4) return;
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    //设置错误监听函数
    xhr.onerror = function () {
      reject(new Error(this.statusText));
    };
    //设置响应类型
    xhr.responseType = 'json';
    //设置请求头信息
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.send()
  });
}
