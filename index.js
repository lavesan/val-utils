/**
 * @description Receives an object with camel case key names
 * @param {{ ...args }} object 
 * @returns Object with snake case key names
 */
export const camelToSnakeCase = function(object) {
    entries = Object.entries(object);
    let obj = {};
    entries.forEach(([key, value]) => {
        const sensitiveKey = key.replace(/[A-Z]/g, function(match) {
            return `_${match.toLowerCase()}`
        });
        obj[sensitiveKey] = value;
    });
    return obj;
}

/**
 * @description Receives a object with snake case key names
 * @param {{ ...args }} object
 * @returns Object with camel case key names
 */
export const snakeToCamelCase = function(object) {
    entries = Object.entries(object);
    let obj = {};
    entries.forEach(([key, value]) => {
        const sensitiveKey = key.replace(/_./g, function(match) { 
            return match.replace(/_/g, '').toUpperCase(); 
        });
        obj[sensitiveKey] = value;
    });
    return obj;
}