import React, { useCallback, useRef, useState } from "react";
import TodoTemplate from "./todo/TodoTemplate"
import TodoList from "./todo/TodoList"
import TodoAddInput from "./todo/TodoAddInput";

import 'bulma/css/bulma.css'


function App(){

  const [inputText, setInputText] = useState('');
  const [todos , setTodos] =  useState([
    {
      idx: 1,
      text: "리액트의 기초 알아보기",
      checked: true,
    },
    {
      idx: 2,
      text: "컴포넌트 스타일링해 보기",
      checked: true,
    },
    {
      idx: 3,
      text: "일정 관리 앱 만들어 보기",
      checked: false,
    },
    {
      idx: 4,
      text: "리액트 기초 강의 듣기",
      checked: false,
    }, {
      idx: 5,
      text: "투두리스트 체크 오류 수정하기",
      checked: false,
    }, {
      idx: 6,
      text: "기술면접 질문 준비하기 3개",
      checked: true,
    }, {
      idx: 7,
      text: "렌더링 과정 설명하기",
      checked: true,
    }, {
      idx: 8,
      text: "리액트 훅 강의 듣기",
      checked: false,
    },
  ]);

  const [todos3 , setTodos3] =  useState([]);
  const nextNo = useRef(4);
  const onChange = (e) => {
    setInputText(e.target.vaue);
  }
  const handlerSubmit = (e) =>{
    e.preventDefault();
      setTodos([...todos, {
        idx: nextNo.current += 1,
        text : inputText,
        checked : false
    }
  ]);
      setInputText('');
  }
  const handlerDelete = (idx) => {
    setTodos(todos.filter(todo => todo.idx !== idx));
  }

  const [checkbox , setChecbox] = useState(false);
  const onChangeBox = ( checked, idx ) => {
    todos.map((item, i) => {
      if(checked){
        item[idx] = true;
      }else {
        item[idx] = false;
      }
    })
    console.log("chbox checked : "+checked);
    console.log("chbox idx : "+idx);
  };

  return(
        <TodoTemplate >
          <TodoAddInput 
            inputText = {inputText}
            setInputText = {setInputText}
            onChange = {onChange}
            handlerSubmit = {handlerSubmit}
          />
          <TodoList 
            todos = {todos} 
            onChangeBox = {onChangeBox}
            handlerDelete = {handlerDelete}/>
        </TodoTemplate>
        
  );
}

export default App