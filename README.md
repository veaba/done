# Done

> https://github.com/veaba/done

前期为了方便开发，嵌入到 https://github.com/veaba/blog 里面的 `src/done`

## 警告！这是一个练手的demo

## 疑问

- declare 用法是什么
```typescript
// declare 用法是什么
declare module xx{

}

```

- xx.d.ts 怎么用
- /// 三斜线的用法


- TODO 应该如何更好的定义一个class 的形状
  - interface
  - type
  - namespace
  - module
  - declare

- 另外。某些情况下 <T> 是什么鬼
- extends   用法
- super     用法

- [学习-声明文件](https://ts.xcatliu.com/basics/declaration-files)


- declare var 声明全局变量
  - 全局修改模式,let、const（常用）
  - 仅用于声明，勿具体实现代码逻辑
- declare function 声明全局方法
```js
declare function jQuery(domReadyCallback: () => any): any;
```
- declare class 声明全局类

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

## class 声明


### 关键字
- public    默认
- private   可以被继承，无法在实例中访问
- protected 类似private 构造函数是protected，无法实例化，只能被继承
- readonly  只读熟悉，无法被修改clone
- static    静态熟悉，在类内部使用时需加类名，无法被实例访问，


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