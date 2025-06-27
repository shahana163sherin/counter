import { useReducer } from "react";
import { useState } from "react";
import './Counter.css'

const initialState={count:0};

function reducer(state,action)
{
    switch(action.type){
        case "inc":
            return {count:state.count+1};
        case "dec":
            return {count:state.count-1};
        default:
            return state;    
    }
}

function Counter(){
    const[state,dispatch]=useReducer(reducer,initialState)
    const [color, setColor] = useState('white');
    function decrement(){
        dispatch({type:"dec"})
    }

    

    return(
       <div  className="div1">
        <h2 style={{color: color}}>{state.count}</h2>
         <div className="div2">
        <button className="btn1" onClick={() => { dispatch({type:"inc"}); setColor('green'); }}>Increment</button>
        <button className="btn2" onClick={() => { decrement(); setColor('red'); }}>Decrement</button>
        </div>
        </div>
    )

}
export default Counter