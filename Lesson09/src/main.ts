// Lesson 09 - Utility Types   03:25:49

 // Partial

 interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
 }

 const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return {...assign, ...propsToUpdate}
 } 
 // Partial here means that we dont want all the values in the interface
 
 const assign1: Assignment = {
    studentId: 'compsci123',
    title: 'Final Project',
    grade: 0
 }
 
 console.log(updateAssignment(assign1, {grade: 95}));
 
// =============================================================

 const assignGraded: Assignment = updateAssignment(assign1, {grade: 95})

//  =========================================================
 // Required and Readonly 

 // Required
 const recordAssignment = (assign: Required<Assignment>): Assignment => {
    // send to database, etc.
    return assign
 } 
  // Required here means that all data are required uncluding the optional 
  
  // Readonly

  const assignVerified: Readonly<Assignment> = {
    ...assignGraded, verified: true
  }
// We cant override any of the property in Readonly either 

// assignVerified.grade = 86 // will show error because property of Readonly utility cannot be changed
  
// ================================================
// recordAssignment(assignGraded) //if we leave the parameter this way, it will show error because verified property is not included there as it is required with the Required utility. The next example will not show error

recordAssignment({...assignGraded, verified: true})

// ==========================================================
// Record

const hexColorMap: Record<string, string> = {
    red: 'FF0000',
    green: '00FF00',
    blue: '0000FF'
}
// The string beside the record utility means the key and value would both be string

type Students = 'Esther' | 'Miracle'
type LetterGrades = 'A' | 'B' | 'C' | 'D' | 'U'

const finalGrades: Record<Students, LetterGrades> = {
    Esther: 'A',
    Miracle: 'B'
}

// =================================================

interface Grades {
    assign1: number,
    assign2: number
}

const gradeData: Record<Students, Grades> = {
    Esther: {assign1: 96, assign2: 65},
    Miracle: {assign1: 97, assign2: 74}
}

// ===========================================

// Pick and Omit

// Pick
type AssignResult = Pick<Assignment, 'studentId' | 'grade'> 
// Pick - is to pick any property we want to use

const score: AssignResult = {
    studentId: 'k13',
    grade: 83 
}

// Omit
  type AssignPreview = Omit<Assignment, 'grade' | 'verified'>

  const preview: AssignPreview = {
    studentId: 'k13',
    title: 'Final Project',
    // grade: 87 // Error because we already use Omit utility
  }

  