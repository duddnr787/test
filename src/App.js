/*eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";


function App() {
  let post = "강남 우동 맛집";
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);
  let [좋아요, 좋아요변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0); //
  let [입력값, 입력값변경] = useState(''); // 수정했gi



  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
        
      </div>

      {
        글제목.map(function (a, i) {
          return (
            <div className="list">
              <h4 onClick={() => { setModal(!modal), setTitle(i) }}>{글제목[i]}
                <span onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...좋아요];
                  copy[i] = copy[i] + 1;
                  좋아요변경(copy);
                }}> 😞
                </span> {좋아요[i]}
              </h4>


              <p>2월 17일 발행</p>
              <button onClick={(e) => {
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
              }}>삭제</button>
            </div>
          )
        })
      }

      <input onChange={(e) => { 입력값변경(e.target.value) }} value={입력값} />
      <button onClick={(e) => {
        let copy = [...글제목]
        copy.unshift(입력값)
        글제목변경(copy)
        입력값변경('')
      }} >글발행</button>

      {
        modal == true ? <Modal 글제목={글제목} 바꾸기={바꾸기} title={title} /> : null
      }
    </div>
  );
  function 바꾸기() {
    let copy = [...글제목];
    copy[0] = "여자 코트 추천";
    글제목변경(copy);
  }
}



function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => { props.바꾸기() }}>글수정</button>
    </div>
  );
}

export default App;
