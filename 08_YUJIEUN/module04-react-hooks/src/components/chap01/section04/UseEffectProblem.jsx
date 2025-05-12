"use client";

import { useEffect, useState } from "react";

export default function UseEffectProblem() {

    const[count,setCount] = useState(0);

    useEffect (()=>{
        console.log(`useEffect 실행`);
    },[count]);
    
    return(
        <div>
            <h2>useEffect 문제 사례</h2>
            <p>현재 카운트 : {count}</p>
            
            <button></button>
        </div>
    );
    
}

