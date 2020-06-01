import {Request} from './request.ts'
import {Response} from './response.ts'
import {ServerRequest} from './lib/std.ts'
import {Done} from "../mod.ts";

export class Context {
    app: Done;
    headers: any
    request: Request
    response: Response

    // TODO app
    constructor(app: Done, serverRequest: ServerRequest) {
        this.app = app
        this.request = new Request(serverRequest)
        this.response = new Response(this.request)
        this.headers = new Headers()
        // TODO cookies ?
    }
}
