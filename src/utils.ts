

/**
 * isNumber
 * @param input
 * @return boolean
 * 
*/
export const isNumber = (input: any) => {
    if (typeof input === 'number') return true
    else return false
}

/**
 * isString
 * @param input
 * @return boolean
 * 
*/
export const isString = (input: any) => {
    if (typeof input === 'string') return true
    else return false
}


/**
 * isArray
 * @param input
 * @return boolean
 * 
*/
export const isArray = (input: any) => {
    if (Array.isArray(input)) return true
    else return false
}

/**
 * isObject
 * @param input
 * @return boolean
 * 
*/
export const isObject = (input: any) => {
    if (typeof input === 'object') return true
    else return false
}

/**
 * isFunction
 * @param input
 * @return boolean
 * 
*/
export const isFunction = (input: any) => {
    if (typeof input === 'function') return true
    else return false
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
    else typeof input
}