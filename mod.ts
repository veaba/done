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

// class Router {
//     constructor(path:string, fn:Fn) {
//         this.path = path
//         this.fn = fn
//     }
// }


// isIp
// proxy
// parse
// http

import { createServer } from './src/http/server.ts'

import context from "./src/context.ts"
import request from "./src/request.ts"
import response from "./src/response.ts"
class Done {

    readonly name: string
    readonly version: string
    public options: any //TODO options interface
    public request: object
    public response: object
    public context: object
    public count: number
    constructor(options?: any) {
        this.options = options || {}
        this.version = "0.0.10"
        this.name = "Done"
        console.log('======>', 'init')

        // TODO create a deno std Server

        // init 
        this.context = Object.create(context)
        this.request = Object.create(request)
        this.response = Object.create(response)
        this.count = 0

    }

    async get(str: string) {
        try {
            return new Promise((resolve, reject) => {
                // TODO  ctx interface
                const ctx: any = {}
                ctx.request = { name: "request" }
                ctx.response = {
                    send: (sendStr: any) => {
                        return sendStr + " : TODO send"
                    }
                }
                resolve(ctx)
            })
        } catch (error) {
            // TODO 打印log和控制台提示 
            return Promise.reject(error)
        }
    }

    async listen(port: number) {
        try {
            return new Promise(async (resolve, reject) => {
                // TODO create server here
                await createServer(port)
                    .then(async (ser: any) => {
                        console.log('ser=>', ser)
                        // TODO 循环给methods使用
                        for await (const req of ser) {
                            // TODO 为什么刷新不会重新载入呢？
                            console.log('await===>', this.count++)


                            
                            req.respond({ body: "Hello world html \n" }) // TODO 这个内容外部写入，这个respond接收的参数
                            /*
                            for (let xx in req) {
                                console.log('xxx=>', x11x)
                            }*/
                            const { method, url } = req  // TODO {GET}
                            console.log("method===>", method, url)
                            // method GET                            
                            // url "/favicon.ico", "/"
                            /*
                            xxx=> done
                            xxx=> _contentLength
                            xxx=> _body
                            xxx=> finalized
                            xxx=> conn
                            xxx=> r
                            xxx=> method
                            xxx=> url
                            xxx=> proto
                            xxx=> protoMinor
                            xxx=> protoMajor
                            xxx=> headers
                            xxx=> w
                            */
                        }
                    })
            })
        } catch (error) {
            return await Promise.reject(error)
        }
    }
}

export {
    Done,
    // Router
}

interface ReqFn {
    (req: any, res: any): void
}
interface Fn {
    (): void //函数
}