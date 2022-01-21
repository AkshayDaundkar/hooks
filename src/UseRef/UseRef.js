import React,{useRef,useState} from 'react';

function UseRef() {
    const inputRef=useRef(null);
    const[data,setdata]=useState("")

    const onClick=()=>{
        console.log(inputRef.current.value)
        inputRef.current.value="";
    }
    let onChanges = (event)=>{
            const newValue = event.target.value;
            setdata(newValue);
    };

 return(
     <div className='text-center m-2'>
     <h1 className='text-center text-xl text-bold uppercase mt-5 '>Changing Data using UseRef</h1><br></br>
     <div className='text-xl font-bold m-2 mt-5  text-center'> {data}<br></br></div>
     <input className='m-2 p-2' type="text" placeholder='Ex...' ref={inputRef}  onChange={onChanges}/>
     <button className='p-2 bg-blue-500' onClick={onClick}>Change Name</button>
     </div>
 )
}

export default UseRef;
