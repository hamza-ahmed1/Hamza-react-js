import React, { useContext } from 'react'
import { NameContext } from './App'
export default function ComponentC() {
const name=useContext (NameContext);
  return (
    <div>
      <h1>This is {name}</h1>
    </div>
  )
}
