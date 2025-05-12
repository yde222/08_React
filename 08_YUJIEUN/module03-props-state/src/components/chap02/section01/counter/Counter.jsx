"use client";

import React, { useState } from "react";


    /*state
    states는 컴포넌트 내부에서 바꾸리수 있는 값을 의미하면, props는 외부에서 전달되어 읽기만 가능하지만, state는 컴포넌트 내부에서 바꿀 수 있는 값을 의미한다.

    react에서는 클래스형 컴포넌트에서 this.state로 사용하던 것을 함수형 컴포넌트에서는 useState라는 훅을 사용하여 상태를 관리한다.
    */

    export default function Counter() {

        const [number,setNumber] = useState(3);

        return(
            <>
            <h1>Number</h1>
            <button onClick={()=> setNumber(number +1)}> +1  </button>

            <button onClick = {() => setNumber(number -1)}> -1 </button>

            <button onClick = {()=> (count = count - 1)}> +1 </button>
            <button onClick = {()=> (count = count - 1)}> -1 </button>
            </>
        );

    }