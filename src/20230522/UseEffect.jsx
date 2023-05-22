import{useEffect, useState} from "react";

function UseEffect(){
    const [count, setCount] = useState(0);
    const [mulCount, setMulCount] = useState(1);

    // useEffect(()=>{
    //     console.log("항상 렌더링")
    // })

    useEffect(()=>{
        console.log("첫번째만 렌더링🔴")
    },[]) // 빈 배열 추가, 의존성 배열이라고 한다. 첫번째만 렌더링 할 수 있게 함.

    useEffect(()=>{
        console.log("증가 및 감소만 렌더링🟡")
    },[count]) // 배열에 count 변수 넣어 줌. count의 변화가 있으면 수행

    useEffect(()=>{
        console.log("곱셈만 렌더링")
    },[mulCount])

    // function upCount(){
    //     setCount(conut + 1);
    // }

    // function downCount(){
    //     setCount(conut - 1);
    // } 오류코드.

return (
    <div className="container mt-3 text-center">
        <h1>UseEffect 공부</h1>
        <button onClick={() => setCount(count + 1)} className="btn btn-primary">증가</button>
        <button onClick={() => setCount(count - 1)} className="btn btn-primary ms-3">감소</button>
        <button onClick={() => setMulCount(mulCount * 2)} className="btn btn-primary ms-3">곱셈</button>
        {/* <button onClick={upCount}} className="btn btn-primary">증가</button>
        <button onClick={downCount} className="btn btn-primary ms-3">감소</button> */}
        <h5>숫자: {count}</h5>
        <h5>곱셈: {mulCount}</h5>
    </div>
)

}

export default UseEffect;