import React,{useState} from "react";
import "./style.css";

const UseState = () =>{
    const [myNum,setMyNum]= useState(10);
    function handleIncrement(){
        
        setMyNum(myNum+1);
    }
    function handleDecrement(){
        if(myNum>0)
        setMyNum(myNum-1);
        else
        alert("Warning!!! - Number is less then 0");
    }
    return (
        <>
        <div className="center_div">
        <p>{myNum}</p>
        <div class="button2" onClick={handleIncrement}>
            <span></span>
            <span></span> 
            <span></span>
            <span></span>
            Increment
        </div>
        <div class="button2" onClick={handleDecrement}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
           
            Decrement
        </div>
        </div>
        </>
    )
};

export default UseState;