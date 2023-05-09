"use strict";
// Type Assertion / Type Casting
// convert to more or less specific
let a = 'hello';
let b = a; // less specific
let c = a; // more specific
// we use "as" keyword for assigning a type  that is less or more specific
// we can also use angle bracket <>
let d = 'world';
let e = 'world';
// Note: Angle bracket cannot be used in jsx i.e react
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat'); // show error until we assign a type assertion to it which is the (as string)
// Be careful! TS sees no problem - but a string is returned as concat is used instead of add
let nextVal = addOrConcat(2, 2, 'concat');
// 10 as string
10;
// it is called double casting or forecasting which simply refers to two asseetion in a documentation i.e 10 is being assigned twice
// The DOM
const img = document.querySelector('img');
const myImg = document.getElementById('img'); // to make TS know that we know a particular attribute is there is using a non-null assertion is simply putting an exclamation mark at the end(!), if we remove the exclamation mark in myImg there would be no error
// Note: we do not need to use a non-null assertion in combination with as
// Using angle bracket
// Note: It does not work in react
const nextImg = document.getElementById('img');
img.src;
myImg.src;
