/*
useEffect 는 React 컴포넌트에서 ' 부수효과(side effect)'를 처리하기 위해 사용되는 Hook입니다.
부수효과란, 컴포넌트 렌더링과 직접적인 관련은 없진만, 외부에 영향을 미치는 작업을 의미
> 데이터 요청, DOM 조작, 구독 설정, 타이머 설정 등
[기본구조]
useEffect(() => {
    //수행할 작업
},[]);

useEffect에는 두 개의 인자가 있다.
1. 첫 번째 인자는 부수효과를 수행하는 함수
2. 두 번째 인자는 의존성 배열로, 이 배열에 포함된 값이 변경될 때마다 첫 번째 인자로 전달된 함수가 실행된다.

실행 시점은 기본적으로 컴포넌트가 렌더링 완료된 후 effect가 실행된다.

*/
"use client";

import React, { useEffect, useState } from "react";



export default function UseEffectBasic() {

    const [todo, setTodo] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then((response) => response.json())
            .then(json => {
                setTodo(json);
                console.log(json);
            });
    },[]);

    return(
        <div>
            <h1>useEffect 기본 사용법</h1>
            <p>{todo?.title}</p>
            <p>{todo?.completed ? "완료" : "미완료"}</p>
        </div>
    );
}