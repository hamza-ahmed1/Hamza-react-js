import React, { useEffect, useRef } from 'react'

export default function UseRefHook() {
    const ref=useRef();
    useEffect(()=>{
        console.log(ref.current.innerHTML);
    })
  return (
    <div>
      <h1 ref={ref}>This is Heading</h1>
    </div>
  )
}
