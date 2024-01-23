import React, { useState } from 'react'

export default function USwithArray() {

    let todo =[];
    let [my_todo,settodo]=useState("");
    const [todolist,updatelist]=useState(todo);
    let addtodo=()=>{
      if(my_todo.length>0)
      {

        updatelist(prevlist=>{
            return [
                ...prevlist,
                my_todo
            ]
                
            my_todo="";
            
        });
        
         
      
      }
        console.log(my_todo.length);
    }

    let onadd=(e)=>{
        my_todo=e.target.value
        
    }
  return (
    <div>
      <ul>
      <p>Enter Your To do Items</p>
        {
        
            todolist.map((n,i)=><li key={i}>{n} <br/>
        <button>remove</button>
        <button>Update</button>
                     </li>)
        }
        <input id='todoitem' onChange={onadd}/>
        <button onClick={addtodo}>Add</button>
      </ul>
    </div>
  )
}
