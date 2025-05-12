"use client";
import React from "react";

export default function KeyEvent() {
  // 키보드 이벤트 핸들러
  const handleKeyDown = (e) => {
    console.log("눌린 키 : ", e.key);
    if (e.key === "Enter") {
      alert("Enter를 누르셨네요");
    }
  };

  return (
    <>
      {/* 키보드 이벤트 */}
      <div>
        <h2>키보드 이벤트(onKeyDown)</h2>
        <input type="text" onKeyDown={handleKeyDown} placeholder="Enter키를 눌러보세요" />
      </div>
    </>
  );
}
