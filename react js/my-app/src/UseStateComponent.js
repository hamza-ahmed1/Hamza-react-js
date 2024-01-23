import React, { useState } from 'react'
import './Heading.css'
export default function UseStateComponent() {
  const [name,setname]=useState("Type Something Here");

  
  let HandleClick=()=>{
    alert(name);
  }

  const HandleChange=(event)=>
  {
      setname(event.target.value);
  }
  return (
    <div>
      <h1 className='main_H'>{name}</h1>
      <label >Entee New Name </label>
      <input id="name" type='text' value={name} onChange={HandleChange}/>

      <br/>
      <button onClick={HandleClick}>Update</button>

    </div>
  )
}
