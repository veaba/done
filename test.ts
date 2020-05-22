import { Done } from './mod.ts'
const port = 9999
const done = new Done() // maybe need some options ...


// TODO 不要回调了，使用async的方法 
done.get('/')
    .then((ctx: any) => {
        console.log("get回调1==>", ctx)
        ctx.body = "实例过来的body"
        console.log("get回调2==>", ctx)
    })

done.listen(port)
    .then(() => {
        console.log(`Start Done server on port ${port}`)
    })
