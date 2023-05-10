"use strict";
// Lesson 07 - Index Signatures & keyof Assertions - 2:40:00 - 3:01:50
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    // David: 'Hola', // It will show error because the interface has a value of number and Hola here is a string,
    Ayo: 7 // No error
};
// For example, If Job is removed here, it will show error and if any property is added TS  has no problem but it must match the type
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
let prop = 'Pizza';
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
// readonly assignment example
// todaysTransactions.Pizza = 40 
console.log(todaysTransactions['Dave']); // TS has no problem because TS believes it to return a number and it didnt know it is not in the object
const student = {
    name: 'Sammy',
    GPA: 3.8,
    classes: [100, 200]
};
// console.log(student.test); // Error because it does not exist in the student object, however it can be solved by index or key signatures
for (const key in student) {
    console.log(`${key}: ${student[key]}`); // No error, there was error here prior to adding the keyof and using asserion (as)
}
// What keyof does is to create a union type of the keys in the Object and it allows us to loop through the object
// If the Object you want to loop over has no index or key signature, it will show error , to avoid it, we use keyof (assertion as keyof) the Interface
Object.keys(student).map(key => console.log(student[key])); // to loop through object using keyof and typeof the Obeject and not interface here
// Using Key Signatures with keyof in a function
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'GPA');
logStudentKey(student, 'name');
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
// If you use the Record utility type instead of providing an index or key signature, you'd still be able to access keyof
