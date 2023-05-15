function Child(props) {
    console.log(props.name);
    console.log(props.age);
    return(
        <div>
        <h3>{props.relation}의 이름은 {props.name}이고, 나이는 {props.age}입니다.</h3>
        </div>
    )
}

export default Child;