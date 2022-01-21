import React,{useEffect, useState} from 'react';
import axios from "axios";


function UseEffect() {
    const [data,setData]=useState("");
    // const [counter,setCounter]=useState(0)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/comments').then((res)=>{
            setData(res.data[0].email);
            console.log("Called");
        });
    },[])

  return(
      <>
        <div className='text-center h-100 w-100 '>
            <h1 className='text-center text-xl text-bold uppercase mt-5 '>Consuming Data using UseEfect</h1><br></br>
            <h3> The Data is Fetched from Api</h3><br/>
            <h3>{data}</h3>
{/* 
            <h2>{counter}</h2> <br/>
            <button onClick={()=>{setCounter(counter+1);}}>Increment</button> */}
        </div>
      </>
      )
}

export default UseEffect;
