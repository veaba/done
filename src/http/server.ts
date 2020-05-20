/**
 * @desc createServer
 * @TODO 
 * @copyright(c) 2020 veaba
 * 
*/
import { serve } from "https://deno.land/std@0.50.0/http/server.ts";

// const { listen } = Deno
export async function createServer(port: number): Promise<any> {
    console.log('this====>', port)
    // TODO
    // const listener = listen({ port: Number(port) })
    return await serve({ port })
}
