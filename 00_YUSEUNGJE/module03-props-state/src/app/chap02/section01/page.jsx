import AfterStateUpdateExample from "@/components/chap02/section01/counter/AfterStateUpdateExample";
import Counter from "@/components/chap02/section01/counter/Counter";
import CounterWithPrevState from "@/components/chap02/section01/counter/CounterWithPrevState";
import UseStateStepByStep from "@/components/chap02/section01/counter/UseStateStepByStep";
import StateCompoenet from "@/components/chap02/section01/StateCompoenet";

function Section02() {
  return (
    <div>
      <StateCompoenet />

      <h2>리액트 상태관리 - useState</h2>
      <Counter />
      <h2>비동기 상태업데이트 문제 </h2>
      <CounterWithPrevState />
      <h2>상태가 변경된 후 특정 작업 수행</h2>
      <AfterStateUpdateExample />
      <h2>UseState사용</h2>
      <UseStateStepByStep />
    </div>
  );
}

export default Section02;
