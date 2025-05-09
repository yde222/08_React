/*
JSX에서 이벤트 핸들링 기본 개념

React와 일반 HTML의 이벤트 처리 방식 차이점:
1. 이벤트 이름은 camelCase로 작성 (HTML: onclick, React: onClick)
2. 이벤트 핸들러는 함수 참조로 전달 (문자열 X)
3. 기본 동작 방지를 위해 preventDefault()를 명시적으로 호출

기본 문법: <요소 이벤트명={핸들러함수}>
*/