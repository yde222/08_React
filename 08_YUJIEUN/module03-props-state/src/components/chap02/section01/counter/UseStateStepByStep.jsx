'use client';

import { useState } from "react";

export default function UseStateStepByStep() {
  console.log("===> 컴포넌트 리렌더링 됨");

  const [message, setMessage] = useState("안녕하세요");
  const onClickEnter = () => setMessage("안녕하세요");
  const onClickLeave = () => setMessage("안녕히가세요");

  const [color, setColor] = useState("black");
  const [backgroundColor, setBackgroundColor] = useState("white");

    return (
        <>
            <h1 style={{color, backgroundColor}}>{message}</h1>
        <div>    
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
        </div>

        <div>    
            <button onClick={()=> setColor("red")}>빨강색</button>
            <button onClick={()=> setColor("blue")}>파란색</button>
            <button onClick={()=> setColor("green")}>초록색</button>
        </div>

        <div>    
            <button onClick={()=> setBackgroundColor("white")}>흰색</button>
            <button onClick={()=> setBackgroundColor("black")}>검정색</button>
            
        </div>
        </>
    );
}