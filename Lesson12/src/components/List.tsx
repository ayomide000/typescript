import {ReactNode} from 'react'

interface ListProps<T> {
    items: T[],
    render: (item: T) => ReactNode
}                                                        


const List = <T,>({ items, render}: ListProps<T>) => {
  return (
    <ul>
        {items.map((item, i) => (
            <li key={i}>
                {render(item)}
            </li>
        ))}
    </ul>
  )
}

// Adding a comma with generic T made TS know that it's a generic

export default List