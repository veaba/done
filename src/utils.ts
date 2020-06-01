/**
 * isNumber
 * @param input
 * @return boolean
 *
 */
export const isNumber = (input: any) => {
    return typeof input === 'number';
}

/**
 * isString
 * @param input
 * @return boolean
 *
 */
export const isString = (input: any) => {
    return typeof input === 'string';
}


/**
 * isArray
 * @param input
 * @return boolean
 *
 */
export const isArray = (input: any) => {
    return !!Array.isArray(input);
}

/**
 * isObject
 * @param input
 * @return boolean
 *
 */
export const isObject = (input: any) => {
    return typeof input === 'object';
}

/**
 * isFunction
 * @param input
 * @return boolean
 *
 */
export const isFunction = (input: any) => {
    return typeof input === 'function';
}

/**
 * typeOf return typeof string
 * @param input {any}
 * @return {string}
 *
 */
export const typeOf = (input: any) => {
    if (isString(input)) return 'string'
    else if (isNumber(input)) return 'number'
    else if (isArray(input)) return 'array'
    else if (isFunction(input)) return 'function'
    else if (isObject(input)) return 'object'
    else return typeof input
}

/**
 * @desc look like HTML content
 * */

export function isHTML(input: any): boolean {
    if (!isString(input)) return false
    return /^\s*<(?:!DOCTYPE|!doctype|html|body)>/i.test(input)
}

/**
 * @desc
 * */
export function isReader(input: any): input is Deno.Reader {
    return typeOf(input) === "object" && "read" in input && typeOf(input.read) === "function"
}

export const encoder = new TextEncoder()
export const decoder = new TextDecoder()

export function encode(input?: string): Uint8Array {
    return encoder.encode(input)
}

export function decode(input?: Uint8Array): string {
    return decoder.decode(input)
}
