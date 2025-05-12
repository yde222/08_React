"use client";

import { useLayoutEffect,useEffect,useState,useRef } from "react";

export default function DomMeaSure(){

    const boxRef = useRef(null);
    const[width,setWidth] = useState(0);

    useLayoutEffect(()=> {
        if(boxRef.current){
            const boxWidth = boxRef.current.offsetWidth;
            setWidth(boxWidth);
        }
    },[]);
    

    return(
        <div>
        <h2>DOM 크기 측정 예제</h2>
        <div ref = {boxRef} style={{width : "50%", height:"100px", backgroundColor: "lightblue"}}>
            측정할 박스
        </div>
        <p> 박스의 너비 :{width}px</p>
        </div>
    );


}