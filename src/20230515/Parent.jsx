import Child from "./Child";

function Parent() {

    return(
        <div>
        <h1>우리 가족을 소개합니다.</h1>
            <Child relation={"아버지"} name={"최재윤"} age={67} />
            <Child relation={"어머니"} name={"이영지"} age={60} />
            <Child relation={"오빠"} name={"최희남"} age={34} />
            <Child relation={"나"} name={"최선경"} age={29} />
        </div>
    )
}

export default Parent;