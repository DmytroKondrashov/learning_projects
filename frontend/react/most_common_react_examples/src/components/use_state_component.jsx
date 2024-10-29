import { useState } from "react";

export function UseStateComponent({ initialCount }) {
  const [number, setNumber] = useState(initialCount);

  return(
    <div>
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>Increment</button>
      <button onClick={() => setNumber(number - 1)}>Decrement</button>
      <button onClick={() => {
        setNumber(n => n + 1);
        setNumber(n => n + 1);
        setNumber(n => n + 1);
      }}>+3</button>
    </div>
  )
}

export function Person() {
  const [person, setPerson] = useState({
    name: 'John',
    age: 30
  })

  return(
    <>
      <p>
          {person.name} is {person.age} years old.
      </p>
      <label htmlFor="name">Name:
        <input id="name" value={person.name} onChange={e => {
          setPerson({...person, name: e.target.value})
        }} />
      </label>
      <label htmlFor="age">Age:
        <input id="age" value={person.age} onChange={e => {
          setPerson({...person, age: e.target.value})
        }}/>
      </label>
    </>
  )
}

export function List() {
  const [list, setList] = useState([])
  const [item, setItem] = useState('')

  return(
    <>
      <h1>To-Dos</h1>
      <input type="text" value={item} onChange={e => setItem(e.target.value)} />
      <button onClick={() => {
        setList([...list, item])
        setItem('')
      }}>Add</button>
      <ul>
        {list.map(item => <li key={item}>{item}</li>)}
      </ul>
    </>
  )
}
