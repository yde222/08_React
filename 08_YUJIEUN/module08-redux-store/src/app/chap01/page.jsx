/*
useSelector는 react-redux 훅이다.
 > Redux Store 상태(State)값에서 필요한 데이터를 추출하여 컴포넌트에서 사용할 수 있도록 하는 훅*/


 /*
 useDispatch 는 */
"use client";

import { useSelector,useDispatch } from "react-redux";

function BasicRedux(){

    //useSelector 훅을 사용하여 Redux Store의 전체 상태에서 핑요한 부분을 선택

    const count = useSelector((state)=>state.count);

    const dispatch = useDispatch();
    return(
        <div>
            <h2> BasicRedux</h2>
        </div>
    )
}
export default BasicRedux;