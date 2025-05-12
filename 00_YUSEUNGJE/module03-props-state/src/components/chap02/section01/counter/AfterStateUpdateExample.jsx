"use client";

import { useState } from "react";

export default function AfterStateUpdateExample() {
  const [isOn, setIsOn] = useState(false);

  const style = {
    width: 200,
    height: 200,
    backgroundColor: isOn ? "green" : "red",
    trasition: "2s",
    marginBottom: "1rem",
  };

  const handleWrongClick = () => {
    setIsOn(!isOn);
    console.log(isOn ? "불이 켜졌습니다" : "불이 꺼졌습니다.");
  };

  return (
    <>
      <div style={style}></div>

      <button onClick={handleWrongClick}>😡잘못된 처리</button>
    </>
  );
}
