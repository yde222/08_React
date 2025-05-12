"use client";


/*[useEffect에서 클린업(Cleanup) 함수 작성하기]

클린업 함수는 컴포넌트가 언마운트될 때 호출된다.
이는 컴포넌트가 사라질 때 정리(clean-up)가 필요한 부수 효과가 있을 때 사용되며
이를 통해 부수 효과를 남기지 않고 정리할 수 있다.
(예: 타이머 제거, 이벤트 리스너 해제 등)

[클린업 함수 작성 방법]
useEffect 내부에서 함수를 반환(return)하면, 컴포넌트가 언마운트될 때 호출된다.

[예시]
useEffect(() => {
  // 부수 효과 실행

  return () => {
    // 클린업 실행
  };
}, []);
*/

import { useState, useEffect } from 'react';

function CleanupComponent() {

const [count, setCount] = useState(0);

useEffect(() => { 
    const timer = setInterval(() => { // timer 에는 생성된 setInterval의 갹채겂울 담아둔다.
        setCount((prev) => prev + 1); // 1초마다 count를 1씩 증가시킨다.
        console.log('타이머실행중...');
    }, 1000);
    
    
    return () => {
    clearInterval(timer); // 타이머를 정리한다.
    console.log('타이머정리');
  };
}, [count]);

/*
useEffect 내부에서 함수를 반환하면, 컴포넌트가 언마운트된 때 호출된다.
이는 주로 리소스 헤제, 정리 작업 등을 수행하는 용도로 사용한다.*/


  

return (
    <div style={{ border: "1px solid black",padding: '20px' }}>
      <h2>CleanupComponent</h2>
        <p>현재 카운트 : {count}</p>
    </div>
  );

}

export default function UseEffectCleanup() {
    const [showComponent, setShowComponent] = useState(true);

    return (
        <div>
            <h2>useEffect 클린업 함수</h2>
            <p>이 페이지 떠나면 타이머 정리</p>
            {showComponent && <CleanupComponent />}
            <button onClick ={()=> setShowComponent(!showComponent)}>
                {showComponent ?'컴포넌트 숨기기' : '컴포넌트 보이기'}
            </button>
        </div>
    )
}