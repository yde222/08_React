//useUser
//React의 Context API를 사용하여 전역적으로 관리되는 사용자 상태에 
//접근하기 위한 커스텀 훅

"use client";

import {useContext} from "react";
import { UserContext } from "../contexts/UserContext"; 

function useX() {
  const context = useContext(XContext);
  if (!context)
    throw new Error("useX는 XProvider 안에서 사용해야 합니다.");
  return context;
}

export default useUser;