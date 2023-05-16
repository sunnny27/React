import { useState } from "react";

function Hooks2() {
    const [time, setTime] = useState(1);

    const increaseTime = () => {
        if (time === 12) {
            setTime(1)
        }
        else {
            setTime(time+1);
        }

    }

    return (
        <div className="text-center">
            <h2>useState 두 번째 공부</h2>
            <h4 style={{color: "red"}}>{time}시</h4>
            <button onClick={increaseTime}
            className="btn btn-success">증가시키기</button>
        </div>
    )
}

export default Hooks2;