/**
 * @desc
 * @copyright 2020 veaba
 *
 */
import {ServerRequest} from "./lib/std.ts"

export class Request {
    #serverRequest: ServerRequest

    constructor(serverRequest: ServerRequest) {
        this.#serverRequest = serverRequest
    }
}

// export default {
//     header() {

//     },

//     // TODO get header
//     // TODO set header
//     headers() {

//     },
//     url() {

//     },

//     origin() {

//     },

//     // header
//     // headers
//     // url
//     // origin
//     // href
//     // method
//     // path
//     // query
//     // querystring
//     // search
//     // host
//     // hostname
//     // URL
//     // fresh
//     // stale
//     // idempotent
//     // socket
//     // charset
//     // length
//     // protocol
//     // secure
//     // ips
//     // ip
//     // subdomains
//     // accept
//     // accepts
//     // acceptEncodins
//     // acceptsCharsets
//     // acceptsLanguage
//     // is
//     // type
//     // get
//     // inspect
//     // toJSON()

// }
