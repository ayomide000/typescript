import { useState, useEffect, useCallback, useMemo, useRef, MouseEvent, KeyboardEvent } from 'react'

interface User {
  id: number,
  username: string
}

type fibFunc = (n: number) => number

const fib: fibFunc = (n) => {
  if (n < 2) return n
  return fib(n - 1) + fib(n - 2)
}
// fib is an example of recursion when a function is calling itself

const myNum: number = 37

function App() {
  const [count, setCount] = useState<number>(0)
  const [users, setUsers] = useState<User[] | null>(null)

  // useRef
  const inputRef = useRef<HTMLInputElement>(null)

  console.log(inputRef?.current);
  console.log(inputRef?.current?.value);

  useEffect(() => {
    console.log('mounting');

    console.log('Users: ', users);
    return () => console.log('unmounting'); // cleanup function
  }, [users])
  // It deals with side effect 

  // useCallback

  const addTwo = useCallback(() => setCount(prev => prev + 2), [])
  // used to memoise function so it wont be recreated whenever called andd  it also takes in a dependency array
  // Another Example: we are not using event in this function tho but if we are to use event
  // const addEvent = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void => setCount(prev => prev + 2), [])
  // Lets give a specific type to the event

  // useMemo
  // useMemo memoises a value, it also takes in a dependency array

  const result = useMemo<number>(() => fib(myNum), [myNum])

  return (
    <div  className='App'>
      <h1>{count}</h1>
      <button onClick={addTwo}>Add</button>
      <h2>{result}</h2>
      <input type="text" ref={inputRef} />
    </div>
  )
}

export default App
