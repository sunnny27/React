import { useEffect, useState } from "react";

function Networking() {
    const [data, setData] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    
    function getURL(){
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => {
            console.log("에러가 있네 ㅠㅠ");
        });
    }

    useEffect(() => {
        getURL();
    }, []);

    getURL();

    return(
        <div className="ms-3 mt-3">
            <h4>결과</h4>
            <pre>{JSON.stringify(data, null, 4)}</pre>
        </div>
    );

}

export default Networking;