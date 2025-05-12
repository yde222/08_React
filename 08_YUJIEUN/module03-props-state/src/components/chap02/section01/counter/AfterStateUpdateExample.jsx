"use client";

import React, { useState } from "react";

export default function AfterStateUpdateExample() {

    const [isOn, setIsOn] = useState(false);
    const style ={
        backgroundColor: isOn ? "green" : "red",
        width :200,
        height: 200,
        transition :"2s",
        marginBottom: "1rem",
    };

    const handleWrongClick = () => {
        setIsOn(!isOn);
        console.log(isOn ?"불이 켜졌습니다." : "불이 꺼졌습니다.");
    };


    return(
        <>
        <div style={style} ></div>

        <button onClick={() => setIsOn(!isOn)}></button>
        <button onClick={() => setIsOn((prev) => !prev)}></button>
        </>
    );
} 