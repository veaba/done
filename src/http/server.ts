/**
 * @desc createServer
 * @TODO 
 * @copyright(c) 2020 veaba
 * @deno source code https://github.com/denoland/deno/tree/master/std/http
 * 
*/
import { serve } from "../lib/std.ts";
export async function createServer(port: number): Promise<any> {
    return await serve({ port })
}
