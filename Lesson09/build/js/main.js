"use strict";
// Lesson 09 - Utility Types   03:25:49
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
// Partial here means that we dont want all the values in the interface
const assign1 = {
    studentId: 'compsci123',
    title: 'Final Project',
    grade: 0
};
console.log(updateAssignment(assign1, { grade: 95 }));
// =============================================================
const assignGraded = updateAssignment(assign1, { grade: 95 });
//  =========================================================
// Required and Readonly 
// Required
const recordAssignment = (assign) => {
    // send to database, etc.
    return assign;
};
// Required here means that all data are required uncluding the optional 
// Readonly
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
// We cant override any of the property in Readonly either 
// assignVerified.grade = 86 // will show error because property of Readonly utility cannot be changed
// ================================================
// recordAssignment(assignGraded) //if we leave the parameter this way, it will show error because verified property is not included there as it is required with the Required utility. The next example will not show error
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
// ==========================================================
// Record
const hexColorMap = {
    red: 'FF0000',
    green: '00FF00',
    blue: '0000FF'
};
const finalGrades = {
    Esther: 'A',
    Miracle: 'B',
};
const gradeData = {
    Esther: { assign1: 96, assign2: 65 },
    Miracle: { assign1: 97, assign2: 74 }
};
// Pick - is to pick any property we want to use
const score = {
    studentId: 'k13',
    grade: 83
};
const preview = {
    studentId: 'k13',
    title: 'Final Project',
    // grade: 87 // Error because we already use Omit utility
};
// =============================================================
// ReturnType
// type newAssign = {title: string, points: number}
const createNewAssign = (title, points) => {
    return { title, points };
};
// It is very useful especially for functions you didnt create like a function from a library
const tsAssign = createNewAssign('Utility Types', 100);
console.log(tsAssign);
// It will create a tuple of parameters of createNewAssign function
const assignArgs = ["Generics", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .catch(err => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
// If you mouseover FetchUsersReturnType, it will show PromiseUser[], To resolve a promise in TS, we wrap Promise inside Awaited
fetchUsers().then(users => console.log(users));
