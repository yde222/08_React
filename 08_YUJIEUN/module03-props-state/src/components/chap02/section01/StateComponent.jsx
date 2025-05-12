"use client";


import React, {useState} from "react";


function StateComponent() {

    const [count, setCount] = React.useState(0);
    console.log(React);;

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h2>State 비동기성 이해하기 </h2>
            <p> 현재 카운트 : {count}</p>
            <button onClick={handleClick}> 클릭</button>
        </div>
    );
}


export default StateComponent;
