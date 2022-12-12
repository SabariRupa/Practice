import axios from 'axios'
import React, { useEffect, useState } from 'react'

function GetHooks() {
  const [info,setInfo]=useState([])
  useEffect(()=>{
    axios.get("dummydb.json").then(e=>{setInfo(e.data)
    })
    
  })
  return (
    <div>
    <h1>{info.map((i)=><li>{i.id}    {i.name}</li>)}</h1>
    </div>
  )
}

export default GetHooks