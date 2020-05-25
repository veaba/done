/**
 * @desc export interface
 * @copyright(c) 2020 by veaba
 * @TODO 啥也不会，先参考express 怎么做 https://www.expressjs.com.cn/5x/api.html#router
 * @TODO 设置static
 * @learn ts 学习笔记 https://github.com/veaba/learn-typescript
 * @result 要求轻量、http2、安全、卡槽式，api设计简单、性能要求高, 有些情况调用原生代码而不是标准库
 * @promise 使用promise 返回异步数据
 * @done
 * methods
 *  json()
 *  static()
 *  Router()
 *  urlencoded()
 *  
 * @response 支持的类型
 *  json
 *  string
 *  html
 *  二进制
 *  stream
 * @events
 *  mount
 * @methods 这块methods标准在哪呢
 *  all
 *  delete
 *  disable
 *  disabled
 *  enable
 *  enabled
 *  engine
 *  listen
 *  METHOD
 *  param
 *  path
 *  put
 *  render
 *  set
 *  use
 * @requires req 
 * properties
 *  app
 *  baseUrl
 *  body
 *  cookies
 *  fresh
 *  hostname
 *  ip
 *  ips
 *  method
 *  originalUrl
 *  params
 *  path
 *  protocol
 *  query
 *  route
 *  secure
 *  signedCookies
 *  stale
 *  subdomains
 *  xhr
 * methods
 *  accepts()
 *  acceptsCharsets()
 *  acceptsEncodins()
 *  acceptsLanguages()
 *  get()
 *  is()
 *  param()
 *  range()
 * @response res
 * properties
 *  app
 *  headersSent
 *  locals
 * methods
 *  appends()
 *  attachment()
 *  cookie()
 *  clearCookie()
 *  download()
 *  end()
 *  format()
 *  get()
 *  json()
 *  jsonp()
 *  links()
 *  location()
 *  redirect()
 *  render()
 *  send()
 *  sendFile()
 *  sendStatus()
 *  set()
 *  status()
 *  type()
 *  vary()
 * @Router
 * methods
 *  all()
 *  METHOD()
 *  param()
 *  route()
 *  use ()
 * 
*/

///  <reference path="done.d.ts">

import { createServer } from "./src/http/server.ts";

import context from "./src/context.ts";
import request from "./src/request.ts";
import response from "./src/response.ts";
class Done {
  readonly name: string;
  readonly version: string;
  public options: any; //TODO options interface
  public request: object;
  public response: object;
  public context: object;
  public body: string;
  public count: number;
  // TODO 假如这是外部传递进来的路由路径和method
  public routerMethods: object;
  middleware: any[];
  fns: any[]; // todo 收集methods 第二个回调参数的方法
  constructor(options?: any) {
    this.options = options || {};
    this.version = "0.0.10";
    this.name = "Done";
    console.log("======>", "Done Class 初始化");

    // TODO create a deno std Server

    // init
    this.context = Object.create(context);
    this.request = Object.create(request);
    this.response = Object.create(response);
    this.middleware = [];
    this.count = 0;
    this.body = "";
    this.routerMethods = {
      "/": "GET",
      "favicon": "GET",
      "about": "GET",
    };
    this.fns = [];
  }
  // TODO 根据路由路径的不同，配置不同的method，然后返回响应的数据
  /**
       * @desc 
       * @param {string} pathName
       * @1 第一种方法，ctx 回调
       * @2 第二种defineProperty 帧听
       * @3 第三种proxy 帧听
       * 
       * @问题 直接赋值快还是入参回调快？
       * 
      */
  async get(str: string, fn?: any) {
    // const _ctx: any = {};
    // _ctx.request = { name: "request" };
    // _ctx.body = "";
    // _ctx.response = {};
    // // TODO 监听body的变化
    // // ctx.body = "I am body"
    // const ctx = new Proxy(_ctx, {
    //     get(target, propKey, receiver) {
    //         return Reflect.get(target, propKey, receiver);
    //     },
    //     set(target, propKey, value, receiver): boolean {
    //         console.log("触发send函数,接收到一个回调", value);
    //         _ctx.body = value;
    //         return true;
    //     },
    // });

    // fn(_ctx)
    // this.fns.push(fn)
    // this.context = _ctx
  }

  /**
       * @desc 路径代理 数据改变处理set回调
       * @TODO 
       * 
      */
  // private async proxyPath(source: any) {
  //     return {
  //          get{

  //          },
  //          set{

  //          }
  //     }
  // },

  async listen(port: number) {
    try {
      return new Promise(async (resolve, reject) => {
        // TODO create server here
        await createServer(port)
          .then(async (ser: any) => {
            // TODO 循环给methods使用
            for await (const req of ser) {
              const { method, url } = req; // TODO {GET}
              console.log(
                "==================↓↓↓===================== ==>",
                this.count++,
                method,
                url,
              );
              if (url === "/" && method === "GET") {
                console.log("fns=====>", this.fns);
                this.fns[0] && this.fns[0](this.context);
                // TODO 实例回调
                // req.headers["Content-Type"] = "text/html;charset=utf-8";
                console.log("111-headers==>\n", req.headers);
                req.headers.set("Content-Type", "text/html;charset=utf-8");
                console.log("222-headers==>\n", req.headers);
                // 这样的设置是没问题，但尚未生效 
                // https://github.com/denoland/deno/blob/master/std/http/_io.ts#L238-L250 这块代码有问题
                // req.headers=new Headers()
                // req.headers.set("Content-Type", "text/html;charset=utf-8");
                req.respond({
                  body: this.body || "没有任何内容！",
                });
              } else {
                // TODO 无法捕捉到路由和method，将抛出404页面，
                //   req.respond({ body: "Hello world html" }); // TODO 这个内容外部写入，这个respond接收的参数
              }
            }
          });
      });
    } catch (error) {
      return await Promise.reject(error);
    }
  }

  /**
     * @desc Use the given middleware `fn`
     * @
    */
  use(fn: void) {
    // TODO
    if (typeof fn !== "function") {
      throw new TypeError("Middleware must be a function!");
    }
    // TODO koa has a debug, what is mean?
    this.middleware = [];
    return this;
  }
  // I don't want to use callback
}

export {
  Done,
  // Router
};

interface ReqFn {
  (req: any, res: any): void;
}
interface Fn {
  (): void; //函数
}
