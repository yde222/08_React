"use client";

export default function MouseEvent() {

    // 마우스 클릭 이벤트 핸들러
    const handleMouseOver =(e) => {
        console.log("마우스가 요소 위에 있습니다.");
        e.target.style.backgroundColor= "lightblue";

    };

    const handleMouseOut =(e) => {
        console.log("마우스가 요소를 벗어났습니다.");
        e.target.style.backgroundColor= "white";
    };

    return (
        <>
        <div style ={{ marginBottom: "20px"}}>
            <h3>
                마우스 이벤트(onMouseOVer, onMouserOut)
            </h3>

        </div>
        <div
            style={{
                padding: "20px",
                border: "1px solid #ddd",
                textAlign: "center",
                lineHeight: "100px",
                backgroundColor: "white",
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >   
        </div>
        </>
    );

}