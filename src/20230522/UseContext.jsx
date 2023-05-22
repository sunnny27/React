import { createContext } from "react";
import UseContextChild1 from "./UseContextChild1";

export const initialContext = createContext();

function UseContext(){
    const name = "최선경";
    const age = 29;

    return(
        <div>
            <initialContext.Provider value={{name, age}}>
                <UseContextChild1/>
            </initialContext.Provider>
        </div>
    )
}
export default UseContext;