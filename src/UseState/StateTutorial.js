import React,{useState} from 'react';

const StateTutorial=()=> {
  const [counter,setcounter]=useState(0);

  let onChanges = (event)=>{
    const newValue = event.target.value;
    setcounter(Number(newValue));
  };

  const increment=()=>{
    setcounter(counter+1);
  }
  const increment5=()=>{
    setcounter(counter+5);
  }

  const increment100=()=>{
    setcounter(counter+100);
  }

  const increment500=()=>{
    setcounter(counter+500);
  }



  return (
    <>
    <h1 className='text-xl font-bold  m-2 text-center'>React Counter Using UseState</h1>
    <div className='text-center'>
      <input className='pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-25 border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500' 
      placeholder='Choose Number to Start'
      onChange={onChanges}
      />
    </div>
    <div className='text-xl font-bold m-2 mt-5  text-center'> {counter}<br></br>
      <button onClick={increment} className='p-2 bg-blue-600 m-3 mt-5'>INCREMENT BY 1</button>
      <button onClick={increment5} className='p-2 bg-red-600 m-3 mt-5'>INCREMENT BY 5</button>
      <button onClick={increment100} className='p-2 bg-green-600 m-3 mt-5'>INCREMENT BY 100</button>
      <button onClick={increment500} className='p-2 bg-yellow-600 m-3 mt-5'>INCREMENT BY 500</button>
    </div>
  </>
  );
}

export default StateTutorial;
