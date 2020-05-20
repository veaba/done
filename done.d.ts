/**
 * @desc Done 类型文件，不过现在对这个文件的了解不是很深
 * @url https://github.com/veaba/learn-typescript#declare-%E5%A3%B0%E6%98%8E%E6%96%87%E4%BB%B6
 * @template https://www.tslang.cn/docs/handbook/declaration-files/templates.html
 * @type vs interface https://www.cnblogs.com/EnSnail/p/11233592.html
 * 
*/

export declare interface DoneOptions {
    name: string
}

// request 结构
interface Request {
    name: string
}

// response 结构
interface Response {
    name: string
}

interface ReqFn {
    (req: any, res: any): void
}


declare namespace Done {
    // TODO: how handle static property
    constructor(options ?: doneOptions) ；
    get(str: string) => Promise;
    post(str: string, fn: (req?: any, res?: any) => void): void;
    put(str: string, fn: (req?: any, res?: any) => void): void;
    listen(port: number, fn: ReqFn): void;

}

interface doneOptions {
    name: string
}