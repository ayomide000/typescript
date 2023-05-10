// Lesson08 - Generics   3:01:52

// const stringEcho = (arg: string): string => arg // but this function only works with string type

// To make Function Generic
const echo = <T>(arg: T): T => arg // <T> is for the type of variable that is passed into the function, we than use it in the parameter and the return type (it doesnt have to be in the return type but where we need it to be), T used here is for type and doesnt mean it has to be T, and this function works with any type we will pass into this function i.e it is generic
// it could  be useful in utility function where we arent sure what type of data we are to pass in

const isObj = <T>(arg: T): boolean => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
}


console.log(isObj(true));
console.log(isObj('John'));
console.log(isObj([1, 2, 3]));
console.log(isObj({name: 'John'}));
console.log(isObj(null));


const isTrue = <T>(arg: T): {arg: T, is: boolean} => {
    if (Array.isArray(arg) && !arg.length ) {
        return {arg, is: false} 
    }
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return {arg, is: false}
    }
    return {arg, is: !!arg} // it is called double bands operator and will return true or false(!!arg) value
}

console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue('Ayo'));
console.log(isTrue(''));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({})); // modified
console.log(isTrue({name: 'Dave'}));
console.log(isTrue([])); // modified
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));


// Using Interface
interface CheckBool<T> {
    value: T,
    is: boolean
}


const checkBoolValue = <T>(arg: T): CheckBool<T> => {
    if (Array.isArray(arg) && !arg.length ) {
        return {value: arg, is: false} 
    }
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return {value: arg, is: false}
    }
    return {value: arg, is: !!arg} // it is called double bands operator and will return true or false(!!arg) value
}

// ================================================

interface HasId {
    id: number
}

const processUser = <T extends HasId>(user: T): T => {
    // process the user with logic here
    return user
}

console.log(processUser({id: 1, name: 'Gbolahan'}));
// console.log(processUser({ name: 'Gbolahan'}));  // Error because the HasId value must be passed into the param which is the id: number 

// =========================================================

const getUsersProperty = <T extends HasId, K extends keyof T>(users: T[], key: K): T[K][] => {
    return users.map(user => user[key])
}


const usersArray = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
]

console.log(getUsersProperty(usersArray, 'email' ));
console.log(getUsersProperty(usersArray, 'username'));

// ========================================================

// Using Generic in a class

class StateObject<T> {
    private data: T

    constructor(value: T) {
        this.data = value
    }

    get state(): T {
        return this.data 
    }

    set state(value: T) {
        this.data = value
    }
}

const store = new StateObject('John')
console.log(store.state);
store.state = 'Gbolahan'
// store.state = 12