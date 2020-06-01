/**
 * @desc response
 * @copyright 2020 veaba
 * @todo
 *
 */

import {Request} from "./request.ts";
import {isHTML, typeOf, isReader, encode} from "./utils.ts";


// TODO

// const {Reader} = Deno

interface ServerResponse {
    status?: number
    headers?: Headers
    body?: Uint8Array | Deno.Reader
}

const BODY_TYPES = ["string", "number", "array", "bigint", "boolean", "symbol"]


export class Response {
    #body?: any
    #headers = new Headers()
    #type?: string  // TODO 一个枚举字符串
    #request: Request
    #serverResponse?: ServerResponse

    constructor(request: Request) {
        this.#request = request

    }

    toServerResponse(): ServerResponse {
        if (this.#serverResponse) return this.#serverResponse

        const body = this.#getBody()

        // TODO setContentType

        const headers = this.#headers
        if (!(body) || headers.has('Content-type') ||
            headers.has('Content-Length')
        ) {
            headers.append("Content-Length", "0")
        }
        return this.#serverResponse = {
            body,
            headers
        }

    }


    /**
     * @desc cover input Date and
     * set Headers
     * @return Uint8Array|Deno.Reader
     * */
    #getBody = (): Uint8Array | Deno.Reader | undefined => {
        const typeBody = typeOf(this.#body)
        let coverBody: Uint8Array | Deno.Reader | undefined
        if (BODY_TYPES.includes(typeBody)) {
            const bodyText = String(this.#body)
            coverBody = encode(bodyText) // TODO 需要encoder.encode吗？
            this.#type = this.#type || (isHTML(bodyText) ? "html" : "text/plain")
        } else if (this.#body instanceof Uint8Array || isReader(this.#body)) {
            coverBody = this.#body
        } else if (typeOf(this.#body) === "object") {
            coverBody = encode(JSON.stringify(this.#body))
        } else if (this.#body) {
            throw new TypeError("Response body is set, but count not conver")
        }
        return coverBody
    }
}

// TODO: this.res in here?
// export default {
// accept
// accepts
// acceptEncodins
// acceptsCharsets
// acceptsLanguage
// append
// attachment
// body
// charset
// etag
// fresh
// flushHeaders
// get
// has(field:string)
// header
// headers
// headerSent
// href
// host
// hostname
// idempotent
// is
// ips
// ip
// inspect
// lastModified(val)
// length
// method
// message
// origin
// path
// protocol
// query
// querystring
// redirect
// remove
// search
// secure
// subdomains
// socket
// stale
// status
// type
// toJSON()
// url
// URL
// vary
// writable


// }
