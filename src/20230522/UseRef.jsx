import {useRef} from "react";

function UseRef(){
    const inputRef = useRef("");

    const handleRef = () => {
        console.log(inputRef.current);
        console.log(inputRef.current.value);
        inputRef.current.focus()
    }

    return(
        <div className="container text-center mt-3">
            <h1>UseRef Study</h1>
            <div className="d-flex justify-content-between">
                <div className="flex-fill">
                    <input 
                    ref={inputRef}
                    type="text"
                    className="form-control" 
                    placeholder="입력해보삼"/>
            </div>
                <button 
                onClick={handleRef}
                className="btn btn-primary">입력</button>
            </div>
        </div>
        
    )
}

export default UseRef;