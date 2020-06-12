/***********************
 * @name TS
 * @author Jo.gel
 * @date 2020/6/2 0002
 ***********************/
const fastify = {
    get(str: string, fn: any) {
        // fn.call(this, {a: "aa", b: "bb"})
        console.info(arguments);
        fn.call(this, {a: "aa", b: "bb"}).then((x: any) => {
            console.timeEnd('ha');
            console.info('xx=>', x);
        })
    }
}

fastify.get('/', async (req: any, res: any) => {
    console.info('===>', req, res);
    console.time('ha');
    return {hello: "world"}
})

fastify.get('/2', async (req: any, res: any) => {
    console.info('===>', req, res);
    console.time('ha');
    return {hello: "world2"}
})



