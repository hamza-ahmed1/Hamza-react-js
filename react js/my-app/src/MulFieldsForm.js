import React, { useState } from 'react'

export default function MulFieldsForm() {
    const [data1,changedata]=useState({
        name:"",
        mail:""
    })
   const  handlechange=(e)=>{
        console.log(e.target.name);
        console.log(e.target.value);
        changedata({
           [e.target.name]:e.target.value
        })
    }

  return (
    <div>
        <label>Enter Name: </label>
        <input type='text' name='name' value={data1.name} onChange={handlechange}/>  
        <br/>   
        <label >Enter Email: </label>
        <input type='text' name='mail' value={data1.mail} onChange={handlechange}/>
        <br/>   
        <br/>   
        <input type='submit' name='email' value={'submit'} /> 
    </div>
  )
}
