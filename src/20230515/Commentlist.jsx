import Comment from "./Comment";

function Commentlist(){
    const nowDate = new Date().toLocaleString();
    const sampleData = [
        {
            name:"신동진",
            comment:"리액트 어렵습니까?",
            date:nowDate
        },
        {
            name:"김유신",
            comment:"리액트는 참.. 뭐랄까.. 흠",
            date:nowDate
        },
        {
            name:"홍길동",
            comment:"리액트 할만하긴한데 Vue가 더 직관적인듯?",
            date:nowDate
        },
        {
            name:"이순신",
            comment:"리액트는 프레임워크에서 1등아닌가요?",
            date:nowDate
        },
        {
            name:"장보고",
            comment:"1등이라도 자기가 편한거 써야지",
            date:nowDate
        }
    ]

    return(
        <div>
            {sampleData.map ((loop, index) => {
                return (
                    <Comment
                        key={index}
                        name={loop.name}
                        comment={loop.comment}
                        date={loop.date}
                    />
                );
            })}
        </div>
    );
}

export default Commentlist;
