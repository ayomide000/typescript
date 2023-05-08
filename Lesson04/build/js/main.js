"use strict";
// LESSON04 - Functions
// interface PostId = stringOrNumber - it will show error because we cannot use type aliases for interface 
// Literal types
let myName;
// myName = 'John' - it will show error because literal type let var: is like const and cannot be reassignable 
let userName;
userName = 'Amy'; //'Gbolahan' - error because it isnt assigned initially and can only be any of the variables assigned to it
// Functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
}; // it is a side effect function and any function that does npt have an explicit return will and should be returned void in typescript
logMsg('Hello!');
logMsg(add(2, 3));
// logMsg(add('a', 3)) - error 
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//  (a:number, b: number): number
// } 
//type vs interface
let multiply = function (c, d) {
    return c * d;
}; // no error
logMsg(multiply(3, 4));
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// Note: If you have optional parameter, it needs to be the last on the list, your required parameters must come first
// default parameters
const sumAll = (a = 50, b, c = 3) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 4));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
// if we give the first value default param
logMsg(sumAll(undefined, 5)); // undefined must be  passed so that typescript will be able to skip the first parameter
// Note: Default values will not work with type aliases and interface
// Rest Parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4, 5)); // 15
// now lets add a first param then the rest param //14, it ignores the first param in logMsg which is 1 because "a" wasnt added
// now lets add the first param to the return function // 15
// The Rest operator should come at the end, all other required param should come at the beginning
const createError = (errMsg) => {
    throw new Error(errMsg);
}; // it is strictly for functions that throw error and it always return "never"
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
//Note: It is important to avoid never, better to see void than never, whenever you see never try to throw error
// custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
// use of never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    // if (typeof value === 'number') return 'number'
    if (isNumber(value))
        return 'number';
    return createError('This should never happen'); // TypeScript is happy now beecause we return a never function
};
