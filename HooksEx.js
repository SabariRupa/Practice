import React, { useEffect, useState } from 'react'

function HooksEx() {
  const[count,setCount]=useState(24)
  let inc1=()=>{
    setCount(count+1)
  }
  let dec1=()=>{
    setCount(count-1)
  }
  let inc5=()=>{
    setCount(count+5)
  }
  useEffect(()=>{
    document.title="Title"
  })
 return (
    <div>
    {count}<br></br>
     <button onClick={inc1}>Click Me!</button><br></br>
     <button onClick={dec1}>Click Me!!</button>
     <button onClick={inc5}>Click Me!!!</button>
    </div>
  )
}

export default HooksEx