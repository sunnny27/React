import "bootstrap/dist/css/bootstrap.min.css"
import figure from "./study.gif"
import Accordion from 'react-bootstrap/Accordion';


function Study(){
    const name="최선경"; //name이라는 변수에 문자열 최선경
    const age=29;
    const 우리반소개 = [
        {"name":"신동진"},
        {"name":"노유리"},
        {"name":"김은현"},
        {"name":"이주은"},
        {"name":"최선경"},
        {"name":"김도영"},
        {"name":"김민우"},
        {"name":"조인제"},
        ] //배열안에 객체

        const h2style = {
            backgroundColor: "pink",
            color: "skyblue",
            textAlign: "center",
            fontSize: "25px",
            border: "1px dashed"
        } //객체스타일

    // const hobby = ["음악감상","드라마 감상","맛집탐방"];
    // const one = ["가","나","다"]//배열이 많을 때 반복문 사용 가능, 자바스크립트의 맵 함수를 이용하여야함. 

        // const body = { //body라는 변수는 오브젝트형으로 되어있고 이 오브젝트는 다르게 말하면 json이다. 
    //     "height" : 153, //key와 value로 구성되어있다. 이걸 렌더링 할 때는 .으로 불러온다. 
    //     "weight" : 1,
    //     "eyes" : "1.0(left), 1.2(right)"
    
    return (
        <div>
            <h1 style={{textAlign: "center", color: "pink"}}>안녕하세요!😊</h1>
            <img src={figure} alt="newjeans" style={{width: "500px", borderRadius: "100px"}} />
            <h2 style={h2style}>리액트 기초단계를 배우고 있습니다.🤦‍♀️</h2>
            <p>저의 이름은 {name}입니다. 😉</p> 
            <p>저의 나이는 {age}입니다.</p>
            <p>우리반을 소개합니다🥰</p>
            <p>학생 이름 : 
            {우리반소개.map((loop, index) => {
                if (index === 우리반소개.length - 1) {
                return <span key={index}>{loop.name}</span>;
                } else {
                return <span key={index}>{loop.name}, </span>;
                } // map 반복문
            })}
            </p>

            {/* <p>우리 반을 소개합니다.🌸</p>
                <p>우리 반의 이름들 :
                     {우리반소개.map((loop, index) => {
                return (
                    우리반소개.length === index + 1 ?
                    <span key={index}>{loop.name} </span> :
                    <span key={index}>{loop.name}, </span>
                    )
                })}
      </p> */}
            {/* <p className="fw-bold text-primary">우리반 이름들: 
            {우리반소개.map((loop, index) =>{
                return <span> {loop.name}, </span>
            })}</p> */}
            {/* <p>저의 취미는 {hobby[0]}, {hobby[1]}, {hobby[2]}입니다.</p> */}
            {/* {one.map((loop, index) => {
                return <p>{index}번째 요소: {loop}</p>
            })} */}
            {/* <p>저의 키는 {body.height}cm입니다.</p> 
            <p>저의 몸무게는 {body.weight}kg입니다.</p>
            <p>저의 시력은 {body.eyes}입니다.</p> */}
            <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>나의 소개</Accordion.Header>
        <Accordion.Body>
         예제 1
        </Accordion.Body>
      </Accordion.Item>
      <hr/>
      <Accordion.Item eventKey="1">
        <Accordion.Header>나의 능력</Accordion.Header>
        <Accordion.Body>
          예제 2
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
    ) //리턴의 의미. 괄호로 된것은 html.. 그 위는 자바스크립트 영역인데 html에 {}로 변수를 불러올 수 있는 것은
    // 이 파일이 jsx파일이라서 가능하다. 이 파일 안에 html,css,js가 모두 가능하다. 
    

         } //함수

export default Study; 
//노드의 module.export={}; 와 같다. jsx가 ES6문법을 사용하는데 최신 문법이라 새로운 문법이 적용된것.
