import { Done } from 'https://raw.githubusercontent.com/veaba/done/master/mod.ts'
const done = new Done() // maybe need some options ...
console.log('done 实例==>', done)
// TODO 不要回调了，使用async的方法 
done.get('/')
    .then((ctx: any) => {
        const { response = {} } = ctx || {}
        const text = response.send("hello world")
    })

done.listen(9999)
    .then(() => {
        console.log(`Start Done server on port ${port}`)
    })
