import { Done } from './done/mod.ts'

const port = 9999

const done = new Done() // maybe need some options ...


console.log('done 实例==>', done)

// TODO 不要回调了，使用async的方法 
done.get('/')
    .then((ctx: any) => {
        console.log("上下文：", ctx)
        const { response = {} } = ctx || {}
        console.log('=======>', response)
        const text = response.send("hello world")
        console.log('====>', text)
    })

done.listen(port)
    .then(() => {
        console.log(`Start Done server on port ${port}`)
    })