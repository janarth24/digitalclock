import React from 'react'
import {useState} from "react";
import './clock.css';

const Clock = () => {
    let time=new Date().toLocaleTimeString();
    const [currentTime,setcurrentTime]=useState(time);


    const updateTime= () =>{
        let time=new Date().toLocaleTimeString();
        setcurrentTime(time);

    }

    setInterval(updateTime,1000);
  return (
  <div className='fgh'>
        <div className="clk">
            <h1>{currentTime}</h1>
        </div>
    </div>
  )
}

export default Clock;
