import React, { useContext, useState } from 'react'

export default function MultipleTags() {
    const [msg,updatemg]=useState("");
    const [selected_val,updateval]=useState("US");
    const [checked_val,update_checked]=useState(false);
    const [courses_arr,update_courses]=useState([]);
    const submitHandle=(e)=>{
        e.preventDefault();
        console.log(e.target[0].value);
        console.log(e.target[1].value);
        console.log(e.target[2].checked);
        console.log(courses_arr);



    }

    const HandleChange=(e)=>{
    
      const value=e.target.value;
      const checked=e.target.checked;
      if(checked)
      {
        update_courses([
          ...courses_arr,e.target.value
        ])
      }
      else{
        update_courses(courses_arr.filter((e)=>(e!==value)))
      }
    }
  return (
    <div>
    <form onSubmit={submitHandle}>
        
      <label>Enter Comments : </label>
      <br/>
      <textarea type='textarea'  onChange={(e)=>{updatemg(e.target.value)}} value={msg} rows={'4'}/>
      <br/>

      <select value={selected_val} onChange={(e)=>{updateval(e.target.value)}}>
        <option>UK</option>
        <option>US</option>
        <option>Pakistan</option>
        <option>Japan</option>

      </select>

      <label>I have agreed on terms &nbsp;</label>
      <input type='checkbox' />
      <br/>
      <br/>
      <label >Select Your Courses :&nbsp;</label>
      <input type='checkbox' name='courses' value={'DSA'} onChange={HandleChange}/>
      <label>DSA &nbsp;</label>
      <input type='checkbox' name='courses' value={'LA'} onChange={HandleChange}/>
      <label>LA &nbsp;</label>
      <input type='checkbox' name='courses' value={'COAL'} onChange={HandleChange}/>
      <label>COAL&nbsp;</label>



      <br/>
      <br/>

      <input type='submit' value={'submit'} onChange={(e)=>{update_checked(e.value.checked)}}/>
    </form>
    </div>
  )
}
