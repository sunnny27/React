import {useState} from "react";

function Clock(){
    const [realTime, setRealTime] = useState("");
    
    setInterval(() => {
        setRealTime(new Date().toLocaleString());
    }, 1000);

    return (
        <div className="text-center">
            <h1 className="text-primary">실시간으로 변하는 시계</h1>
            <h2 className="text-danger"><b>{realTime}</b></h2>
        </div>
    )
}

export default Clock;