import {useEffect,useRef,useLayoutEffect} from 'react';

function UseLayoutEffects() {

    const inputRef=useRef(null);
    
    useEffect(()=>{
        inputRef.current.value="Hello";
    },[]);

    useLayoutEffect(()=>{
        console.log(inputRef.current.value);
    }, []);

    const increment=()=>{

    }
  return (
  <div className='App'>
      <input ref={inputRef} value="Akshay" className='w-100 h-100 p-5 m-5 text-xl border border-gray-600' onChange={increment}/>
  </div>
  );
}

export default UseLayoutEffects;
