"use client";

export default function FormEvent() {
  // 입력 변경 이벤트 핸들러
  const handleInputChange = (e) => {
    console.log("입력값 : ", e.target.value);
  };

  // 폼 제출 이벤트 핸들러
  const handleFormSubmit = (e) => {
    e.preventDefault(); // 기본 제출 동작 방지
    console.log("폼 제출됨");
  };

  return(
    <>
      <div style ={{
        marginBoottom: "20px",
      }}>
        <h3>폼 이벤트(onChange,onSubmit)</h3>
        <form>
          <input type= 'text' onChange={handleInputChange} placeholder="텍스트를 입력하세요"/> 
          <button type="submit"> l</button>
        </form>
      </div>
    </>
  );
}
