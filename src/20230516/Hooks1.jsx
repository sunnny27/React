import { useState } from "react";

function Hooks1() {
    console.log("렌더링이 되었나?");
    // let number = 10;
    const[number, setNumber] = useState(10); //앞의 number는 변수, 뒤의 set은 변수를 업데이트 시키는 함수

    function doubleNumber(){
        console.log("버튼아 눌렸니?");
        setNumber(number * 2)
        // return number * 2;
    }

    return(
        <div className="text-center mt-3">
        <h1>useState 첫 번째 공부</h1>
        <h4>Count: {number}</h4>
        <button 
            onClick={doubleNumber}
            className="btn btn-primary">더블 숫자 증가</button>
        </div>
    )
}

// const Hooks1 = () => {
//     return (
//         <h1>Hooks1 컴포넌트 (화살표 함수로)</h1>
//     )
// }

export default Hooks1; //코드 내에서 우리가 필요한 곳에 갈고리를 걸어 제어
//Hook의 종류가 다양함. 주로 useState, useEffect, useCallback, useMemo