/***********************
 * @desc compose object get|set with proxy
 * @author Jo.gel
 * @date 2020/6/2 0002
 ***********************/

// const objectSet = {
//     _body: "",
//     get body() {
//         return this._body
//     },
//     set body(v) {
//         console.info('set boy==>', v);
//         this._body = v
//     }
// }

const _objectSet = {}

// @ts-ignore
const objectSet:any = new Proxy(_objectSet, {
    get(target: any, propKey: any, receiver: any) {
        // @ts-ignore
        return Reflect.get(target, propKey, receiver)
    },
    set(target: any, propKey: any, value: any, receiver: any) {
        // @ts-ignore
        return Reflect.set(target,propKey,value,receiver)
    }
})

console.time('objectSet');
for (let i = 0; i < 100; i++) {
    objectSet.body = 'hello world: '
}
console.timeEnd('objectSet');
console.info('===>objectSet', objectSet);

// 对象get、set 100次2ms
// 对象get、set 1000次 objectSet: 18ms
// 对象get、set 10000次 objectSet: 138ms


// proxy 100次3ms
// proxy 1000次 objectSet: 21ms
// proxy 10000次 objectSet: 153ms
