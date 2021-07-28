import React from "react";
import{useState} from "react";

const FunctionalCompInput=()=>{
    const[number,setNumber]= useState(0)
    const[userInput, setUserInput]=useState("")


    return (
        <>
    <p>this is functional components</p>
    <p>{number}</p>
    <button onClick={()=> setNumber(number + 1)}>add one</button>
    <button onClick={()=> setNumber(number - 1)}>minus one</button>
    <button onClick ={()=> setNumber(0)}>reset</button>
    <br/>
    <p> you typed... {userInput}</p>
    <input onChange={(e)=> setUserInput(e.target.value)}/>
    </>
    )
}

export default FunctionalCompInput;