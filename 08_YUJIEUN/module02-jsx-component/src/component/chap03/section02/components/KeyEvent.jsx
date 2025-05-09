"use client";

export default function KeyEvent() {

    const handleKeyDown = (e) => {
    
        console.log("키가 눌렸습니다.");
        console.log("눌린 키 : ", e.key);
        if(e.key === "Enter") {
            console.log("엔터키가 눌렸습니다.");
        }
    
    };

    return(
        <>
        <div >
        <h3>키보드 이벤트(onKeyDown)</h3>
        <input type = "text" onKeyDown={handleKeyDown} placeholder="키를 눌러보세요." />
        </div>
        </>

    );

}