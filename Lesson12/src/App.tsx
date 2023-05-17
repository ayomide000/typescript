import Heading from "./components/Heading"
import Section from "./components/Section"
import Counter from "./components/Counter"
import List from "./components/List"

import {useState} from 'react'

function App() {
    const [count, setCount] = useState<number>(1)

  return ( 
  <>
    <Heading title={"Hello"}/>  
    {/* show error until a title props is added */}
    <Section title={"Different Value"}>This is my Section.</Section> 
     {/* children is not something that can be passed around like props, it goes in between the tags */}
    <Counter setCount={setCount}>Count is {count}</Counter>
    <List items={['Coffee', 'Tacos', 'Code']} render={(item: string) => <span className="bold gold">{item}</span>}/>
  </>
  )
}

export default App
