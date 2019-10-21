# Val Utils

I created this utils repo to make functions/consts that helps developers like me in many ways.

If you have some troubles's idea, feel free to talk to me or make a fork with a pull request with a solution on my repo!

## Using

Just install this library from npm

```bash
npm i --save val-utils
```

and then import the function you want:

```javascript
import { camelToSnakeCase } from 'val-utils';
```

## Functions

### camelToSnakeCase

Transforms the key names of a object from camel case to snake case

```javascript
const camelCaseObject = {
    userId: 1,
    userEmail: 'email@gmail.com',
    userPassword: 'rds@%%$#$das!',
};

console.log(camelToSnakeCase(camelCaseObject));
/**
 * Output:
 * {
 *      user_id: 1,
 *      user_email: 'email@gmail.com',
 *      user_password: 'rds@%%$#$das!',
 * }
 * /
```

### snakeToCamelCase

Transform the key names of a object from snake case to camel case

```javascript
const snakeCaseObject = {
    user_id: 1,
    user_email: 'email@gmail.com',
    user_password: 'rds@%%$#$das!',
};

console.log(snakeToCamelCase(snakeCaseObject));
/**
 * Output:
 * {
 *   userId: 1,
 *   userEmail: 'email@gmail.com',
 *   userPassword: 'rds@%%$#$das!',
 * };
 * /
```
