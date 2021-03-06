# Done

> https://github.com/veaba/done

前期为了方便开发，嵌入到 https://github.com/veaba/blog 里面的 `src/done`

现在只是非常的基础，在原标准库 `http/server.ts` 里面再做一次封装

预期
  - 使用最底层的库，从新封装一层才好(现在使用标准库)
  - 吸收了`oak`、 `koa`的特性  
  - 参考:
    - [oak](https://github.com/oakserver/oak)
    - [koa](https://github.com/koajs/koa)
    - [fastity](https://github.com/fastify/fastify)

  
## TODO LIST、feature

|feat | 描述 |
|-----|------|
|Router||
|get||
|post||
|put||
|res:image||
|res:audio||
|res:video||
|res:js||
|res:css||
|res:file||
|res:download file||
|https||
|http2||
|res:json|√|
|res:string|√|
|res:array|√|
|res:object||
|res:jsonp||
|res:blob||
|res:binay||
|res:stream||
|res:websocket||
|set headers||
|redirect||
|throw http code||
  
      
## 优化指标
- TODO 使用`fast-json-stringify` 替换原生的`JSON.stringify()`
- TODO radix-tree 来处理router，见 https://github.com/delvedor/find-my-way
- TODO [使用样式重用对象和函数](https://github.com/mcollina/reusify)
- TODO 闭包问题，避免嵌套闭包
  - [see](https://mcollina.github.io/take-your-http-server-to-ludicrous-speed/#34)

bad
```js
function process (bigdata, cb) {
  remoteCall(bigdata, function (err, something) {
    storeSomething(something, function (err, res) {
      // this function is short-lived and hard to optimize
      // bigdata is still in scope!
      cb(null, res * 2)
    })
  })
}
```

good
```js
function process (bigdata, cb) {
  remoteCall(bigdata, function (err, something) {
    // bigdata exits scope here
    callStoreSomething(something, cb)
  })
}
function callStoreSomething(something, cb) {
  /* this function can be optimized! */
  storeSomething(something, function (err, res) {
    cb(null, res * 2)
  })
}
```
## 警告！这是一个练手的demo

> deno run --allow-net app.ts

```typescript 

// app.ts

import { Done } from 'https://raw.githubusercontent.com/veaba/done/master/mod.ts'
const done = new Done() // maybe need some options ...
console.log('done 实例==>', done)
// TODO 不要回调了，使用async的方法 
done.get('/',(ctx:any)=>{
  ctx.response.body="Hello world!"          // 支持string
  // ctx.body = {hello:"world"}             // 支持 json
  // ctx.body = 2020                        // 支持 number
})

done.listen(9999)
    .then(() => {
        console.log(`Start Done server on port ${port}`)
    })

```

## 疑问

- 需要理解use 的中间期间设计理念
- 使用一个中间期间数组去遍历执行完回调函数
- declare 用法是什么
```typescript
// declare 用法是什么
declare module xx{

}

```

- xx.d.ts 怎么用
- /// 三斜线的用法

- 每次更新后，更新一下实例的get
解决办法：回调

- TODO 应该如何更好的定义一个class 的形状
  - interface
  - type
  - namespace
  - module
  - declare

- `<T>` 
- extends   用法
- super     用法

- [学习-声明文件](https://ts.xcatliu.com/basics/declaration-files)


- declare var 声明全局变量
  - 全局修改模式,let、const（常用）
  - 仅用于声明，勿具体实现代码逻辑
- declare function 声明全局方法
```ts
declare function jQuery(domReadyCallback: () => any): any;
```
- declare class 声明全局类


- ts 如何在class内部个定时器，然后执行实例的函数，给实例返回参数
```ts
// src/Animal.d.ts

declare class Animal {
    name: string;
    constructor(name: string);
    sayHi(): string;
}

// 具体实现将报错：// ERROR: An implementation cannot be declared in ambient contexts.
```
- declare enum 声明全局枚举类型
- declare namespace 声明（含有子属性的）全局对象
- interface 和 type 声明全局类型
- export 导出变量
- export namespace 导出（含有子属性的）对象
- export default ES6 默认导出
- export = commonjs 导出模块
- export as namespace UMD 库声明全局变量
- declare global 扩展全局变量
- declare module 扩展模块
- /// <reference /> 三斜线指令

- 如何调用Deno内置方法
``` ts
const listen = Deno.listen
```

## class 声明


### 关键字
- public    默认
- private   可以被继承，无法在实例中访问
- protected 类似private 构造函数是protected，无法实例化，只能被继承
- readonly  只读属性，无法被修改clone
- static    静态属性，在类内部使用时需加类名，无法被实例访问，


## ts 与es 的箭头函数

注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>。
在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
在 ES6 中，=> 叫做箭头函数，应用十分广泛，可以参考 ES6 中的箭头函数。

## 异步回调

```js
//express 的回调方法
function cool(a, fn) {
    console.log('a==>', a)
    console.log('fn==>', fn('xx', 'hah'))
}

const he = cool('/abs', (z, x) => {
    console.log('he=>', arguments)
    console.log('回调的结果==>', z, x)
})

// TODO 使用promise async/await

```

## TODO: 如何测试框架性能？

- string 和 其他类型的处理速度
- 不使用函数作为回调，而使用proxy。经过测试，循环100、1000次对比，均三倍运行速度优于函数回调

## TODO: koa 路由输入 （洋葱模型）

实在太简单了，还是得要内置一波常用的东西，先实现功能，等待后续稳定再剥离，总结完善框架

```js
if (ctx.request.path == '/about') {
    ctx.response.type = 'html'; // 指定返回类型为 html 类型
    ctx.response.body = 'this is about page <a href="/">Go Index Page</a>';
  } else {
    ctx.response.body = 'this is index page';
}
```

## TODO: 知识盲区

- Unit8Array
- buf

## TODO: deno 返回的req

```text

ServerRequest {
 done: Promise { <pending> },
 _contentLength: undefined,
 _body: null,
 finalized: false,
 conn: ConnImpl {
  rid: 4,
  remoteAddr: { hostname: "127.0.0.1", port: 15442, transport: "tcp" },
  localAddr: { hostname: "127.0.0.1", port: 9999, transport: "tcp" }
 },
 r: BufReader {
  r: 565,
  w: 565,
  eof: false,
  buf: Uint8Array(4096) [
       71,  69,  84,  32,  47, 102,  97, 118, 105,  99, 111, 110,  46, 105,  99,
      111,  32,  72,  84,  84,  80,  47,  49,  46,  49,  13,  10,  72, 111, 115,
      116,  58,  32,  49,  50,  55,  46,  48,  46,  48,  46,  49,  58,  57,  57,
       57,  57,  13,  10,  67, 111, 110, 110, 101,  99, 116, 105, 111, 110,  58,
       32, 107, 101, 101, 112,  45,  97, 108, 105, 118, 101,  13,  10,  80, 114,
       97, 103, 109,  97,  58,  32, 110, 111,  45,  99,  97,  99, 104, 101,  13,
       10,  67,  97,  99, 104, 101,  45,  67, 111, 110,
      ... 3996 more items
    ],
  rd: ConnImpl {
   rid: 4,
   remoteAddr: { hostname: "127.0.0.1", port: 15442, transport: "tcp" },
   localAddr: { hostname: "127.0.0.1", port: 9999, transport: "tcp" }
  }
 },
 method: "GET",
 url: "/favicon.ico",
 proto: "HTTP/1.1",
 protoMinor: 1,
 protoMajor: 1,
 headers: Headers { host: 127.0.0.1:9999, connection: keep-alive, pragma: no-cache, cache-control: no-cache, user-agent: Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36, sec-fetch-dest: image, accept: image/webp,image/apng,image/*,*/*;q=0.8, sec-fetch-site: same-origin, sec-fetch-mode: no-cors, referer: http://127.0.0.1:9999/, accept-encoding: gzip, deflate, br, accept-language: zh-CN,zh;q=0.9,en;q=0.8, cookie: Hm_lvt_e8002ef3d9e0d8274b5b74cc4a027d08=1579594807,1579660868,1579742421 },
 w: BufWriter {
  usedBufferBytes: 39,
  err: null,
  writer: ConnImpl {
   rid: 4,
   remoteAddr: { hostname: "127.0.0.1", port: 15442, transport: "tcp" },
   localAddr: { hostname: "127.0.0.1", port: 9999, transport: "tcp" }
  },
  buf: Uint8Array(4096) [
       72,  84,  84,  80,  47,  49,  46,  49,  32,  50,  48,  48,  32,  79,  75,
       13,  10,  99, 111, 110, 116, 101, 110, 116,  45, 108, 101, 110, 103, 116,
      104,  58,  32,  49,  56,  13,  10,  13,  10,  72, 101, 108, 108, 111,  32,
      119, 111, 114, 108, 100,  32, 104, 116, 109, 108,  32,  10,   0,   0,   0,
        0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
        0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
        0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
      ... 3996 more items
    ]
 }
}

```

## 设置headers

```ts
// haha,要new 实例
const headers=new Headers({"Content-Type":"text/html;charset=utf-8"})
const req={respond:(x)=>x}
req.respond({
  body: this.body || "没有任何内容！",
  headers
});
```

## Deno 编码解码

```ts
const str = "Hello world 世界"
const encoder = new TextEncoder()
const decoder = new TextDecoder()

const x = encoder.encode(str)

console.log('encode==>xxx==>', x)
const y = decoder.decode(x)
console.log('decode==>yyy==>', y)
```

## Header Content-Type

- text: `text/plain`
- multipart: `multipart/mixed`
- application: `application/octet-stream`、`application/json`
- message: E-mail 
- image: 静态图片
- audio: 音频数据
- video: 视频
