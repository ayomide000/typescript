"use strict";
//LESSON 03 - Array, Object, Tuple, Enum, type and interface
let stringArr = ['one', 'hey', 'Dave'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'Ayo';
// stringArr.push(42) - there is an error because it can only accept string type
stringArr.push('hey');
guitars[0] = 1984; //it accepts number even though the first element in the array is string because we already declare that the array can accept either number or string in the parameters as the elements passed in the array are string and number type
guitars.unshift('Jim');
let test = []; // this is an any type data meaning it can accept any data types
let bands = []; // while this is strictly a string array type and cannot accept any other data type
// bands.push(true)  - will give error 
bands.push('Van Halen'); // NO error
// Tuple  - strictly for a particular data type passed to the argument
let myTuple = ['Dave', 52, true]; // more strict than an array
let mixed = ['John', 1, false];
mixed = myTuple; // No error because mixed is an array that can accept the 3 data types which myTuple also has
// myTuple = mixed  - error because myTuple is strictly for 3 elements and must be orderly as it is been passed if.e string, number, boolean
// myTuple[2] = 75 - error because the third element in myTuple must be boolean and 75 is a number
myTuple[2] = false; // no error
//Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: 'Dave',
    prop2: true
};
// exampleObj.prop1 = 65 - error 
exampleObj.prop1 = 'Gbolahan';
exampleObj.prop2 = false;
// there is also interface that can be used with type interchangeably but with interface, you use it like a function and with type like an arroew function like type Guitarist = {your type} - in a nutshell no equal sign in interface like type
let evh = {
    name: 'David',
    active: false,
    albums: [1984, 3009, 'OU812']
};
let JP = {
    // name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV']
};
// what if name is made optional instead of active and want to be called in the function?
const greetGuitarist = (guitarist) => {
    // return `Hello ${guitarist.name?.toUpperCase()}!` //it will give error unless question mark is added to the name
    var _a;
    //OR
    if (guitarist.name) {
        return `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}!`;
    }
    return 'Hello!';
};
console.log(greetGuitarist(JP));
//Enums
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 12] = "U";
    Grade[Grade["D"] = 13] = "D";
    Grade[Grade["C"] = 14] = "C";
    Grade[Grade["B"] = 15] = "B";
    Grade[Grade["A"] = 16] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
// it starts with U and ends with A, by default, U has a value of 0 and A, 4 but if we give U any number,the rest will dynamically follow U with increment i.e if U is assigned a value of 12, A will dynamically be 16
