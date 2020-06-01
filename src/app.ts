/***********************
 * @name TS
 * @author Jo.gel
 * @date 2020/6/1 0001
 ***********************/
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

import {createServer} from "./http/server.ts";
import {ServerRequest} from "./lib/std.ts"
import {Context} from "./context.ts";

export class Done {
    readonly name: string;
    readonly version: string;
    options: any; //TODO options interface
    count: number;
    routerMethods: object; // TODO 假如这是外部传递进来的路由路径和method
    middleware: any[];
    fns: any[]; // todo 收集methods 第二个回调参数的方法
    constructor(options?: any) {
        this.options = options || {};
        this.version = "0.0.10";
        this.name = "Done";
        console.log("======>", "Done Class 初始化");
        // init
        this.middleware = [];
        this.count = 0;
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
     * @1 第一种方法，ctx 回调
     * @2 第二种defineProperty 帧听
     * @3 第三种proxy 帧听
     *
     * @问题 直接赋值快还是入参回调快？
     *
     * @param port
     */

    async listen(port: number) {
        // 可能有一些状态选项
        try {
            return new Promise(async (resolve, reject) => {
                await createServer(port)
                    .then(async (ser: any) => {
                        // TODO 循环给methods使用
                        // TODO 这里的this.content 必须是单独的实例！！通过new  Context()
                        // TODO 能获取到this.get 的第二参数的入参吗？
                        // TODO 多线程的创建实例？
                        for await (const req of ser) {
                            await this.#requestHandler(req)
                        }
                    });
            });
        } catch (error) {
            return await Promise.reject(error);
        }
    }

    /**
     * @desc Handler each request.
     * */
    #requestHandler = async (request: ServerRequest) => {
        const context = new Context(this, request)
        console.info('boom ￥%%===>', context);
        await request.respond(context.response.toServerResponse())
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
