/**
 * @description Receives an object with camel case key names
 * @param { [key: string]: any } object 
 * @returns Object with snake case key names
 */
const camelToSnakeCase = function(object) {
    if (typeof object === 'object') {
        const entries = Object.entries(object);
        let obj = {};
        entries.forEach(([key, value]) => {
            const snakeKey = key.replace(/[A-Z]/g, function(match) {
                return `_${match.toLowerCase()}`
            });
            // If the value is an object, then it's also parsed to snake case
            if (typeof value === 'object')
                obj[snakeKey] = camelToSnakeCase(value);
            else
                obj[snakeKey] = value;
        });
        return obj;
    } else
        return object;
}

/**
 * @description Receives a object with snake case key names
 * @param { [key: string]: any } object
 * @returns Object with camel case key names
 */
const snakeToCamelCase = function(object) {
    if (typeof object === 'object') {
        const entries = Object.entries(object);
        let obj = {};
        entries.forEach(([key, value]) => {
            const camelKey = key.replace(/_./g, function(match) { 
                return match.replace(/_/g, '').toUpperCase(); 
            });
            // If the value is an object, then it's also parsed to camel case
            if (typeof value === 'object')
                obj[camelKey] = snakeToCamelCase(value);
            else
                obj[camelKey] = value;
        });
        return obj;
    } else
        return object;
}

module.exports = { snakeToCamelCase, camelToSnakeCase }