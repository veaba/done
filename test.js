function get(str) {
    try {
        return new Promise((resolve, reject) => {
            const _ctx = {}
            _ctx.request = {
                name: "request"
            }
            _ctx.response = {
                send: (sendStr) => {
                    console.log('触发send函数,接收到一个回调', sendStr)
                }
            }
            let x = 0
            resolve(_ctx)
            setInterval(() => {
                console.log('xx==>', x++)
                // get.bind(null,...arguments)
                return resolve( )
            }, 3000)
            
        })
    } catch (error) {
        // TODO 打印log和控制台提示 
        return Promise.reject(error)
    }
}

get('/hahahah')
    .then(ctx => {
        console.log('实例第一次==>', ctx)
        // 在get函数内部如何处理，让调用它的地方再自己跑一次？
    })


// // promise 回调来自，实例传递参数执行到父级
// async function get(str) {
//     try {
//         return new Promise((resolve, reject) => {
//             // TODO  ctx interface
//             const _ctx = {}
//             _ctx.request = {
//                 name: "request"
//             }
//             _ctx.response = {
//                 send: (sendStr) => {
//                     console.log('触发send函数,接收到一个回调', sendStr)
//                 }
//             }
//             // TODO 监听body的变化
//             // ctx.body = "I am body"


//             return resolve(_ctx)
//         })
//     } catch (error) {
//         // TODO 打印log和控制台提示 
//         return Promise.reject(error)
//     }
// }

// get('/hahahah')
//     .then(ctx => {
//         console.log('实例==>', ctx)
//         const {
//             response,
//         } = ctx
//         console.time('1000次入参比较')
//         for (let i = 0; i < 1000; i++) {
//             response.send('send a boom')
//             // response.send('send a boom')
//         }
//         console.timeEnd('1000次入参比较')
//     })


// // 比较赋值和传参性能

// // 100次入参比较: 18.091ms
// // 1000次入参比较: 228.970ms