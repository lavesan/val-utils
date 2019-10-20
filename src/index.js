/**
 * @description Receives an object with camel case key names
 * @param {{ ...args }} object 
 * @returns Object with snake case key names
 */
const camelToSnakeCase = function(object) {
    entries = Object.entries(object);
    let obj = {};
    entries.forEach(([key, value]) => {
        const snakeKey = key.replace(/[A-Z]/g, function(match) {
            return `_${match.toLowerCase()}`
        });
        obj[snakeKey] = value;
    });
    return obj;
}

/**
 * @description Receives a object with snake case key names
 * @param {{ ...args }} object
 * @returns Object with camel case key names
 */
const snakeToCamelCase = function(object) {
    entries = Object.entries(object);
    let obj = {};
    entries.forEach(([key, value]) => {
        const camelKey = key.replace(/_./g, function(match) { 
            return match.replace(/_/g, '').toUpperCase(); 
        });
        obj[camelKey] = value;
    });
    return obj;
}

module.exports = { snakeToCamelCase, camelToSnakeCase }