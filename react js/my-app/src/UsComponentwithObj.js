import React, { useState } from 'react'

export default function UsComponentwithObj() {
    const obj={
        name:"Hamza",
        age:19,
        Gender:"male"
    }
    const [myperson,setobj]=useState(obj);
    // let ChangeState=()=>{
    //     setobj({
    //         name:"Daniyal",
    //         age:18,
    //         Gender:"male"
    //     })
    // }
    let ChangeState=()=>{
        setobj(previousstate=>{
            return{
                ...previousstate,
                name:"Daniyal"
        }
        })
    }
  return (
    <div>
      <h1>{myperson.name}</h1>
      <h1>{myperson.age}</h1>
      <h1>{myperson.Gender}</h1>
      <button onClick={ChangeState}>Change obj</button>


    </div>
  )
}

