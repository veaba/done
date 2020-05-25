/**
 * @desc createServer
 * @TODO 
 * @copyright(c) 2020 veaba
 * @deno source code https://github.com/denoland/deno/tree/master/std/http
 * 
*/
import { serve } from "https://deno.land/std@0.53.0/http/server.ts";
// import { serve } from "https://deno.land/std@0.50.0/http/server.ts";
export async function createServer(port: number): Promise<any> {
    return await serve({ port })
}
