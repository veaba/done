import {Done} from "./mod.ts";

const port = 9999;
const done = new Done(); // maybe need some options ...

// import Router from "./src/router/router.ts"

// const router= new Router()

// TODO 每次路由就是一个新的实例，不共享同意一个class 实例上面的ctx,理由是set header不应该改变

// done.get('/about', (ctx: any) => {
//     ctx.body = `
//   <h1> This is About Page</h1>
//   `
// })

done.use((ctx: any) => {
    ctx.response.body = "Hello world!";
})

// TODO done.use(router)


// done.listen(port)
//     .then(() => {
//         console.log(`Start Done server on port ${port}`);
//     });

await done.listen(port)

// ctx.body = JSON.stringify(jsonObj)
// ctx.body = { hello: "world!" }
// TODO 返回json
// TODO 返回HTML
// TODO 返回str
// TODO 返回文件解析
// TODO 返回下载
// TODO 根据类型自动返回，或可指定类型

//
// const {method, url} = req; // TODO {GET}
// let body = "没有任何内容！" // TODO 这里的body 从哪里取？
// let contentType = 'text/html;charset=utf-8'
// if (typeof body === 'object') {
//   contentType = 'application/json;charset=utf-8'
//   body = JSON.stringify(body)
// } else body = String(body) // TODO 可能存在其他类型，比如图片、blob、二进制文件等等
//
//
// if (url === "/" && method === "GET") {
//   // console.log("fns=====>", this.fns);
//   this.fns[0] && this.fns[0]({}); // TODO 触发回调
//   const headers = new Headers({
//     "content-Type": contentType,
//     "server": "Deno/1.0.2;power done"
//   })
//   req.respond({
//     body,
//     headers
//   });
// } else if (url === '/about' && method === 'GET') {
//   this.fns[1] && this.fns[1]({}); // TODO 如何获取这个参数
//   const headers = new Headers({
//     "content-Type": contentType,
//     "server": "Deno/1.0.2;power done"
//   })
//   req.respond({
//     body,
//     headers
//   });
// } else {
//   // TODO 无法捕捉到路由和method，将抛出404页面，
//   // TODO 这个内容外部写入，这个respond接收的参数
//   req.respond({body: "404 Error :)"})
// }
