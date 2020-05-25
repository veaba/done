/**
 * @desc Router class
 * @copyright(c) 2020 by veaba
 * */
class Router {
    opts: any
    methods: string[];
    params: object;
    stacks: any[];      // TODO what?
    constructor(opts: any) {
        this.opts = opts
        this.methods = this.opts.methods || [
            'HEAD',
            'OPTIONS',
            'GET',
            'PUT',
            'PATCH',
            'POST',
            'DELETE',
        ]
        this.params = {}
        this.stacks = []

        // TODO 生成Router 的method，es5 循环一遍就好了，现在要一个个写了？
    }

    // TODO 应该也是返回一个实例吧
    get(path: string, middleware?: void) {
        // 一波操作返回实例
        return this
    },

    /**
     * @desc POST method
     * @TODO 
     * 
     */
    post(path: string, middleware?: void) {
        // 一波操作返回实例
        return this
    },
    /**
     * @desc Router middleware
     * 
    */
    // use(fn:void){}
}