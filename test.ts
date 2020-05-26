import { Done } from "./mod.ts";
const port = 9999;
const done = new Done(); // maybe need some options ...

// import Router from "./src/router/router.ts"

// const router= new Router()

// TODO 每次路由就是一个新的实例，不共享同意一个class 实例上面的ctx,理由是set header不应该改变
done.get("/", (ctx: any) => {
  const date = new Date();
  const jsonObj = {
    hello: "world" + date.getTime()
  }
  // ctx.headers.set('xx', 'ww')// TODO 禁止被覆盖替换
  ctx.body = 2020
})

done.get('/about', (ctx: any) => {
  ctx.body = `
  <h1> This is About Page</h1>
  `
})

// TODO done.use(router)


done.listen(port)
  .then(() => {
    console.log(`Start Done server on port ${port}`);
  });


  // ctx.body = JSON.stringify(jsonObj)
  // ctx.body = { hello: "world!" }
  // TODO 返回json
  // TODO 返回HTML
  // TODO 返回str
  // TODO 返回文件解析
  // TODO 返回下载
  // TODO 根据类型自动返回，或可指定类型