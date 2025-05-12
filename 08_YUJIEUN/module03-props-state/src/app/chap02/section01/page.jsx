import Counter from "@/components/chap02/section01/counter/Counter";
import CounterWithPreState from "@/components/chap02/section01/counter/CounterWithPreState";
import StateComponent from "@/components/chap02/section01/StateComponent";

function Section02() {
  return (
    <div>
        <StateComponent />
        <h1>리액트 상태관리 - useState 02</h1>
        <Counter />
        <h2>비동기성 상태 업데이트하기 </h2>
        <CounterWithPreState />
        <h2>상태 업데이트 시점</h2>

    </div>
  );
}