// Type Assertion / Type Casting

type One = string
type Two = string | number
type Three = 'hello'

// convert to more or less specific
let a: One = 'hello'
let b = a as Two // less specific
let c = a as Three // more specific

// we use "as" keyword for assigning a type  that is less or more specific

// we can also use angle bracket <>
let d = <One>'world'
let e = <string | number>'world'

// Note: Angle bracket cannot be used in jsx i.e react

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') return a + b
    return '' + a + b
}

let myVal: string = addOrConcat(2,2, 'concat') as string // show error until we assign a type assertion to it which is the (as string)

// Be careful! TS sees no problem - but a string is returned as concat is used instead of add
let nextVal: number = addOrConcat(2,2, 'concat') as number


// 10 as string
(10 as unknown) as string 
// it is called double casting or forecasting which simply refers to two asseetion in a documentation i.e 10 is being assigned twice

// The DOM
const img = document.querySelector('img')!
const myImg = document.getElementById('img') as HTMLImageElement // to make TS know that we know a particular attribute is there is using a non-null assertion is simply putting an exclamation mark at the end(!), if we remove the exclamation mark in myImg there would be no error

// Note: we do not need to use a non-null assertion in combination with as

// Using angle bracket
// Note: It does not work in react
const nextImg = <HTMLImageElement>document.getElementById('img') 

img.src
myImg.src