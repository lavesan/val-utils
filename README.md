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

Example:

```javascript
const camelCaseObject = {
    userId: 1,
    userEmail: 'email@gmail.com',
    userPassword: 'rds@%%$#$das!',
    userData: {
        userAccount: 1234,
        userDv: 1,
        userAgency: 123,
    }
};

console.log(camelToSnakeCase(camelCaseObject));
/**
 * Output:
 * {
 *      user_id: 1,
 *      user_email: 'email@gmail.com',
 *      user_password: 'rds@%%$#$das!',
 *      user_data: {
 *          user_account: 1234,
 *          user_dv: 1,
 *          user_agency: 123,
 *      }
 * }
 * /
```

### snakeToCamelCase

Transform the key names of a object from snake case to camel case

Example:

```javascript
const snakeCaseObject = {
    user_id: 1,
    user_email: 'email@gmail.com',
    user_password: 'rds@%%$#$das!',
    user_data: {
        user_account: 1234,
        user_dv: 1,
        user_agency: 123,
    }
};

console.log(snakeToCamelCase(snakeCaseObject));
/**
 * Output:
 * {
 *   userId: 1,
 *   userEmail: 'email@gmail.com',
 *   userPassword: 'rds@%%$#$das!',
 *   userData: {
 *       userAccount: 1234,
 *       userDv: 1,
 *       userAgency: 123,
 *   }
 * }
 * /
```
