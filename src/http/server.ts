/**
 * @desc createServer
 * @TODO 
 * @copyright(c) 2020 veaba
 * 
*/
import { serve } from "https://deno.land/std@0.50.0/http/server.ts";
export async function createServer(port: number): Promise<any> {
    return await serve({ port })
}
