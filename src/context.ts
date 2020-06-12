import {Request} from './request.ts'
import {Response} from './response.ts'
import {ServerRequest} from './lib/std.ts'
import {Done, State} from "./app.ts";

export class Context{
    app: Done;
    request: Request
    response: Response

    // TODO app
    constructor(app: Done, serverRequest: ServerRequest) {
        this.app = app
        this.request = new Request(serverRequest)
        this.response = new Response(this.request)

        // TODO cookies ?
    }
}
