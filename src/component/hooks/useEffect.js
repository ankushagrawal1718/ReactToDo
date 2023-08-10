import React, { useEffect, useState } from "react";
import "./style.css";

const UseEffect = () =>{
    const [myNum,setMyNum]= useState(0);

    useEffect(()=>{
        document.title = `Chats(${myNum})`
        });

    function handleIncrement(){ 
        setMyNum(myNum+1);
    }
    // function handleDecrement(){
    //     if(myNum>0)
    //     setMyNum(myNum-1);
    //     else
    //     alert("Warning!!! - Number is less then 0");
    // }
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
        </div>
        </>
    )
};

export default UseEffect;