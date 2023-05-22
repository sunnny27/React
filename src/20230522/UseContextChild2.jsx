import { useContext } from "react";
import { initialContext } from "./UseContext";

function UsecontextChild2 (){

    const {name, age} = useContext(initialContext);

    return(
        <div className="text-center fw-bold">
            <h5>저의 이름은 {name}입니다. 
            저의 나이는 {age}입니다.</h5>
        </div>
    )
    
}
export default UsecontextChild2;