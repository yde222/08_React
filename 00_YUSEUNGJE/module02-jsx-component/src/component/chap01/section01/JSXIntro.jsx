/*
JSX란?
javascript xml의 합성어로, javascript 확장 문법이다.
이를 사용하지 않으면 가상 돔을 생성하기 위해서 createElement를 이용하게 된다. 
이렇게 createElement를 통해 엘리먼트를 정의하면 복잡하기도 하고 가독성도 좋지 않다.
그래서 리액트 팀은 ReactElement를 정의하는 간편한 방법으로 JSX문법을 제공한다.
자바스크립트를 확장한 문법으로, ReactElement를 xml문법 형식으로 정의할 수 있는 방법이다.

단, JSX는 공식적인 자바스크립트 문법이 아니다. 바벨이라는 트랜스 파일링 툴이 필요하다.
바벨은 ES6+, ES next 문법을 ES5문법으로 변환해 주는 도구이다.
추가로 JSX를 순수 리액트로 변환해 주는 기능이 포함되었다.(바벨이 JSX 처리 표준으로 사용된다.)
*/

export default function JSXIntro() {
  const name = "홍길동"; // javascript 변수

  return (
    <div>
      <h1>JSX의 개념과 역할</h1>
      <h2>안녕하세요!</h2>
      <p>{name}님 환영합니다.</p> {/* 중괄호를 사용해 JavaScript 표현식 삽입 */}
      <p>현재 시간: {new Date().toLocaleTimeString()}</p>
    </div>
  );
}
