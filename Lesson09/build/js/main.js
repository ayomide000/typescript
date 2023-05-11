"use strict";
// Lesson 09 - Utility Types   03:25:49
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
    Miracle: 'B'
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
