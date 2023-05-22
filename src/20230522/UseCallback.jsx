import { useEffect, useState, useCallback } from "react";

function UseCallback(){
    const [number, setNumber] = useState(0);

    const someFunction = useCallback(() => {
        console.log(`someFunction number: ${number}`);
    }, [number]);

    useEffect(() =>{
        console.log("someFuction이 변경되었습니다.")
    },[someFunction]);

    return(
        <div className="text-center mt-3">
            <h1>UseCallback공부</h1>
            <input 
                onChange={(event) => setNumber(event.target.value)}
                value={number}
                type="number" 
            />
            <button className="ms-3">someFunction 실행</button>
            </div>
    )
}
export default UseCallback; 