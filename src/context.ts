
export class Context {
    body: string
    response: any
    headers: any
    request: any
    constructor() {
        this.body = ""
        this.response = {}
        this.request = {}
        this.headers = new Headers()
    }
}
