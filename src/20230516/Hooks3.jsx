import { useState } from "react";

function Hooks3() {
    const [inputText, setInputText] = useState("");
    const [nameList, setNameList] = useState([]);

    function handleText(event) {
        setInputText(event.target.value);
        // console.log(event.target.value);
        // console.log("handleText 함수가 동작하는가....?")
    }

    function onSubmit() {
        console.log("출석 버튼이 눌린건가...");
        console.log(inputText);
        // 배열을 useState로 만들었을 때 값을 업데이트 하기 위해서
        // 이전의 값을 가져와서, spread 연산자로 풀어준 다음에 추가를해서
        // 배열로 만들어야한다.
        setNameList((이전값) => {
            return [...이전값, inputText]
        });
        setInputText("");//이름 입력창 출석 버튼 누른 후 빈칸으로 설정되게
    }

    const handleKeyword = (e) => {
        if (e.key === 'Enter'){
            onsubmit();
        }
    } // 출석 엔터키 입력함수

    return (
        <div className="container text-center mt-3">
            <h2>useState 세 번째 공부 (출석부)</h2>
            <label className="form-label" htmlFor="text">
                클래스 학생 이름을 입력하세요!
            </label>
            <div className="d-flex justify-content-center">
                <div>
                    <input
                        onChange={handleText}
                        className="form-control"
                        type="text"
                        id="text"
                        placeholder="학생 이름을 입력하세요."
                        value={inputText}
                        onKeyPress={handleKeyword} // 엔터키입력함수, 지원중단문법
                    />
                </div>
                <div>
                    <button onClick={onSubmit} className="btn btn-danger ms-2">출석</button>
                </div>
            </div>
            {/* <div className="card mt-3">
                <div className="card-body">
                    <span className="text-primary fw-bold">1등</span> : 노유리
                </div>
            </div>
            <div className="card mt-3">
                <div className="card-body">
                <span className="text-primary fw-bold">2등</span> : 김은현
                </div>
            </div> */}
            
            {nameList.map((loop, index) => {
                return (
                    <div className="card mt-3" key={index}>
                    <div className="card-body">
                    <span className= { index < 3 ? "text-primary fw-blod" : "text-danger fw-bold"}>{index+1}등</span> : {loop}
                    {/* <span className="text-primary fw-bold">{index+1}등</span> : {loop} */}
                    </div>
                </div>  
                    // <p key={index}>{index+1}등으로 출석한 사람: {loop}</p>
                )
            })}
        </div>
    )
}


export default Hooks3;