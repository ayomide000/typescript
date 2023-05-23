// useContext
import Counter from "./Counter";
import { CounterProvider } from "./context/CounterContext";
import { initialState } from "./context/CounterContext";

function App() {
  
  return (
    <>
      <CounterProvider count={initialState.count} text={initialState.text}>
        <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
      </CounterProvider>
    </>
  )
}

// NOTE: The Provider only expects one child. Wrap the children in a fragment <> </> OR change the ChildrenType in context to: ReactElement | ReactElement[] | undefined.
// A provider can have multiple children components, allowing you to provide the same context value to different parts of your component tree.






export default App