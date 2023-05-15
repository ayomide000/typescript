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
  // Required here means that all data are required including the optional 
  
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
    Miracle: 'B',
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

// Omit - to omit
  type AssignPreview = Omit<Assignment, 'grade' | 'verified'>

  const preview: AssignPreview = {
    studentId: 'k13',
    title: 'Final Project',
    // grade: 87 // Error because we already use Omit utility
  }

  
  // ==========================================================
  // Exclude and Extract

  type adjustedGrade = Exclude<LetterGrades, "U"> //to remove

  type highGrades = Extract<LetterGrades, "A" | "B"> // to select
  // Mouse over LetterGrades for both exclude and extract

  // ========================================================
  // Nonnullable

  type AllPossibleGrades = 'Dave' | 'John' | null | undefined

  type NamesOnly = NonNullable<AllPossibleGrades> // returns datas that are not null like null and undefined

  // =============================================================
  // ReturnType

  // type newAssign = {title: string, points: number}

  const createNewAssign = (title: string, points: number) => {
    return {title, points}
  }

  type newAssign = ReturnType<typeof createNewAssign>
  // It is very useful especially for functions you didnt create like a function from a library

  const tsAssign: newAssign = createNewAssign('Utility Types', 100)
  console.log(tsAssign);

  // ==============================================
  // Parameters

  type AssignParams = Parameters<typeof createNewAssign>
  // It will create a tuple of parameters of createNewAssign function

  const assignArgs: AssignParams = ["Generics", 100]

  const tsAssign2: newAssign = createNewAssign(...assignArgs)
  console.log(tsAssign2);

  // ==================================================
  // Awaited - helps us with the ReturnType of a Promise

  interface User {
    id: number,
    name: string,
    username: string,
    email: string
  }

  const fetchUsers = async (): Promise<User[]> => {

    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .catch(err => {
      if (err instanceof Error) console.log(err.message);
    })
    return data

  }

  type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>> 
  // If you mouseover FetchUsersReturnType, it will show PromiseUser[], To resolve a promise in TS, we wrap Promise inside Awaited

  fetchUsers().then(users => console.log(users))