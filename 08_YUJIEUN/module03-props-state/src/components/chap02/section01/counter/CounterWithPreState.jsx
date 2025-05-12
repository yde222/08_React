"use client";

import React, { useState } from "react";

export default function CounterWithPreState() {

    const [number, setNumber] = useState(0);
    const [logs, setLogs] = useState([]);

    //문제상황 - 직접 상태값을 참조해서 연속으로 업데이트 

    const handleWrongIncrease=() => {
        setLogs([]);
        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
    };

    /*
        예상은  : 0 +1 +1 +1 +1 = 4
        실제는  : ( 마지막  setNumber 만 반영된다.)
        setState는 비동기적으로 작동하기 때문에, setState를 여러번 호출하면 마지막에 호출된 값만 반영된다.비동기로 동작<
    */

    const handleCorrectIncrease = () => {
        setLogs([]);

        setNumber((prev)=> {
            const update = prev + 1;
            setLogs(logs => [...logs,`1단계 : ${prev}+1 = ${update}`]);
            return update;
        });

        setNumber((prev)=> {
            const update = prev + 1;
            setLogs(logs => [...logs,`1단계 : ${prev}+1 = ${update}`]);
            return update;
        });

        setNumber((prev)=> {
            const update = prev + 1;
            setLogs(logs => [...logs,`2단계 : ${prev}+1 = ${update}`]);
            return update;
        });

        setNumber((prev)=> {
            const update = prev + 1;
            setLogs(logs => [...logs,`3단계 : ${prev}+1 = ${update}`]);
            return update;
        });

        setNumber((prev)=> {
            const update = prev + 1;
            setLogs(logs => [...logs,`4단계 : ${prev}+1 = ${update}`]);
            return update;
        });
    };

    return(
        <>
        <h1 style={{color: number<0? "red" :"blue"}}> Counter : {number} </h1>
        
        <button onClick = {() => setNumber((prev) => prev -1)}> -1 </button>

        <button onClick = {handleWrongIncrease}>+1 X 4</button>

        <button onClick = {handleCorrectIncrease}>+1 X 4</button>
        
        <hr />

        <h3> 상태변화 로그</h3>
        <ul>
            {
                logs.map((log, i) => (
                    <li key={i} style={{fontFamily:"monospace"}}>{log}</li>
                ))
            }

        </ul>
        </>
    );
}