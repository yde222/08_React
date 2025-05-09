export default function JSXIntro() {
    
    
    return (
     <div>
      <h1>JSX Intro</h1>
        <h2>
        JSX는 JavaScript XML의 약자로, JavaScript에서 HTML을 작성할 수 있는 문법입니다.
        </h2>
        <p>
            {name}는 JSX를 사용하여 HTML을 작성할 수 있습니다.
        </p>
        <h2>h</h2>
        <div>
            <h2>JSX는 JavaScript XML의 약자로, JavaScript에서 HTML을 작성할 수 있는 문법입니다.</h2>
            <p>JSX는 JavaScript와 HTML을 혼합하여 사용할 수 있는 문법입니다.</p>
            <p>JSX는 React에서 사용되는 문법으로, React 컴포넌트를 작성할 때 사용됩니다.</p>
            <p>JSX는 JavaScript와 HTML을 혼합하여 사용할 수 있는 문법입니다.</p>
            <div>
                <h2>Virtual DOM과의 관계</h2>
                <p>
                    JSX로 작성된 코드는 React 요소로 변환되고,
                    이 요소들이 Virtual DOM을 구성하게된다.
                    React는 상태 변경 시 Virtual DOM을 효율적으로 업데이트한다.
                </p>
                <img src="https://velog.velcdn.com/images/ksykma/post/824b6071-2888-4613-84b8-1a272a09224c/image.png" width={"600px"} height={"300px"}/>
            </div>
        </div>
    </div>
    );

}