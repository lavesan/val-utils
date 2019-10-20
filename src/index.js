/**
 * @description Receives an object with camel case key names
 * @param {{ ...args }} object 
 * @returns Object with snake case key names
 */
const camelToSnakeCase = function(object) {
    keys = Object.keys(object);
    let obj = {};
    keys.forEach(key => {
        const snakeKey = key.replace(/[A-Z]/g, function(match) {
            return `_${match.toLowerCase()}`
        });
        obj[snakeKey] = object[key];
    });
    return obj;
}

/**
 * @description Receives a object with snake case key names
 * @param {{ ...args }} object
 * @returns Object with camel case key names
 */
const snakeToCamelCase = function(object) {
    entries = Object.keys(object);
    let obj = {};
    entries.forEach(key => {
        const camelKey = key.replace(/_./g, function(match) { 
            return match.replace(/_/g, '').toUpperCase(); 
        });
        obj[camelKey] = object[key];
    });
    return obj;
}

module.exports = { snakeToCamelCase, camelToSnakeCase }