import React, { useReducer } from 'react';

const  UseReducer=() =>{
    // const [counter,setcounter]=useState(0);
    // const [showText,setshowText]=useState(true);
    //usereducer is used for many states at a time

    const reducer=(state,action)=>{
        switch(action.type){
            case "Increment":
                return {counter:state.counter+1,showText:state.showText}
            case "toggleShowText":
                return {counter:state.counter,showText:!state.showText}
            default:
                return state;
        }
    };

    const [state,dispatch]=useReducer(reducer,{counter:0,showText:true})


    // const Increment=()=>{
    //     setcounter(counter+1);
    //     setshowText(!showText);
    // }

    return(
        <>
        <div className='text-center'>
        <div>{state.counter}</div>
        <button onClick={()=>{
            dispatch({type:"Increment"});
            dispatch({type:"toggleShowText"});

        }} className='p-2 bg-blue-600'>Click Here</button>
        {state.showText && <p> This is a Text</p>}
        </div>
        </>

    );
}

export default UseReducer;
