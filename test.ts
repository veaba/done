import { Done } from "./mod.ts";
const port = 9999;
const done = new Done(); // maybe need some options ...

// import Router from "./src/router/router.ts"

// const router= new Router()

// TODO 不要回调了，使用async的方法
// done.get("/", (ctx: any) => {
//   const date = new Date();
//   ctx.body = "Hello Worlaad!" + new Date();
//   console.log("=====>Get什么？", date);
//   console.log('=====实例回调====>\n', ctx)
//   // ctx.body = { hello: "world!" }
//   // TODO 返回json
//   // TODO 返回HTML
//   // TODO 返回str
//   // TODO 返回文件解析
//   // TODO 返回下载
//   // TODO 根据类型自动返回，或可指定类型
// })


// TODO done.use(router)


done.listen(port)
  .then(() => {
    console.log(`Start Done server on port ${port}`);
  });
7