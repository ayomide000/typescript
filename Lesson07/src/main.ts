// Lesson 07 - Index Signatures & keyof Assertions - 2:40:00 - 3:00:00

// Index Signatures

// interface TransactionObj {
    //  [index: string]: number,
//     readonly [index: string]: number, // Note that we can also make it readonly, it will not allow any assignment to any property inside the object that is created
    // [index: boolean]: number - will show error  because the key can not be boolean 
// }  
// Here we say all the keys (key-value pair) would be strings and the values are going to be numbers, and we could also use a union value for the values i.e (number | string | boolean etc). The keys however, are usually string, number, symbol or template literal type but can never be boolean

// Another example of using index signature 
interface TransactionObj {
    readonly [index: string]: number,
    Pizza: number,
    Books: number,
    Job: number
} // This example shows propert can be added here but it must also contain the initial property  like Pizza, Books, Job


const todaysTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    // David: 'Hola', // It will show error because the interface has a value of number and Hola here is a string,
    Ayo: 7 // No error
}
 // For example, If Job is removed here, it will show error and if any property is added TS  has no problem but it must match the type


console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);

let prop: string = 'Pizza'
console.log(todaysTransactions[prop]);

const todaysNet = (transactions: TransactionObj): number => {
    let total = 0
    for (const transaction in transactions) {
        total += transactions[transaction]
    }
    return total
}

console.log(todaysNet(todaysTransactions));

// readonly assignment example
// todaysTransactions.Pizza = 40 

console.log(todaysTransactions['Dave']); // TS has no problem because TS believes it to return a number and it didnt know it is not in the object


// =============================================================

interface Student {
    // [key: string]: string | number | number[] | undefined  //it will show error on GPA and classes here because their type is different from string, to avoid this, more types in the Student interface must be added to the key signature value using union type, lets add number abd number[]. it is still showing error in the classes key because we made it optional, therefore we need to add undefined type to it
    name: string,
    GPA: number,
    classes?: number[]  // Optional
}

const student: Student = {
    name: 'Sammy',
    GPA: 3.8,
    classes: [100, 200]
}

// console.log(student.test); // Error because it does not exist in the student object, however it can be solved by index or key signatures

for (const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`); // No error, there was error here prior to adding the keyof and using asserion (as)
}
// What keyof does is to create a union type of the keys in the Object and it allows us to loop through the object

// If the Object you want to loop over has no index or key signature, it will show error , to avoid it, we use keyof (assertion as keyof) the Interface

 

Object.keys(student).map(key => console.log(student[key as keyof typeof student])) // to loop through object using keyof and typeof the Obeject and not interface here

// Using Key Signatures with keyof in a function

const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`);
}

logStudentKey(student, 'GPA')
logStudentKey(student, 'name')


// ================================================

// interface Incomes {
//     [key: string]: number
// }

type Streams = 'salary' | 'bonus' | 'sidehustle'

type Incomes = Record<Streams, number | string> 

const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
}

for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof Incomes]);
}
// If you use the Record utility type instead of providing an index or key signature, you'd still be able to access keyof