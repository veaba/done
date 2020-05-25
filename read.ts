/**
 * @desc Deno 无法返回亚太语言
 * 
*/

const str = "Hello world 世界"

// const ab= new ArrayBuffer(100)

// console.log('ab=>',ab)
// const x= new Deno.Buffer(ab)

// console.log('xx=>',x)

// const writer= Buff

// await writeResponse(this.w, r); //TODO r
// writeResponse(w: Deno.Writer,r: Response)

//  encoder.encode(r.body); 出了问题

const encoder = new TextEncoder()
const decoder = new TextDecoder()

const x = encoder.encode(str)

console.log('encode==>xxx==>', x)
const y = decoder.decode(x)
console.log('decode==>yyy==>', y)



// BufWriter {
//     usedBufferBytes: 0,
//     err: null,
//     writer: ConnImpl {
//      rid: 4,
//      remoteAddr: { hostname: "127.0.0.1", port: 8816, transport: "tcp" },
//      localAddr: { hostname: "127.0.0.1", port: 9999, transport: "tcp" }
//     },
//     buf: Uint8Array(4096) [
//         72,  84,  84,  80,  47,  49,  46,  49,  32,  50,  48,  48,  32,  79,  75,
//         13,  10,  99, 111, 110, 116, 101, 110, 116,  45, 108, 101, 110, 103, 116,
//        104,  58,  32,  50,  49,  13,  10,  13,  10, 230, 178, 161, 230, 156, 137,
//        228, 187, 187, 228, 189, 149, 229, 134, 133, 229, 174, 185, 239, 188, 129,
//          0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
//          0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
//          0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
//        ... 3996 more items
//      ]
//    }
   