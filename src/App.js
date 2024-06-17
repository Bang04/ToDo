import React, { useCallback, useRef, useState } from "react";
import TodoTemplate from "./todo/TodoTemplate"
import TodoList from "./todo/TodoList"
import TodoAddInput from "./todo/TodoAddInput";

import 'bulma/css/bulma.css'


function App(){

  const [inputText, setInputText] = useState('');
  const [todos , setTodos] =  useState([
    {
      id: 1,
      text: "리액트의 기초 알아보기",
      status: false,
    },
    {
      id: 2,
      text: "컴포넌트 스타일링해 보기",
      status: false,
    },
    {
      id: 3,
      text: "일정 관리 앱 만들어 보기",
      status: false,
    },
    {
      id: 4,
      text: "리액트 기초 강의 듣기",
      status: false,
    }, {
      id: 5,
      text: "투두리스트 체크 오류 수정하기",
      status: false,
    }, {
      id: 6,
      text: "기술면접 질문 준비하기 3개",
      status: false,
    }, {
      id: 7,
      text: "렌더링 과정 설명하기",
      status: false,
    }, {
      id: 8,
      text: "리액트 훅 강의 듣기",
      status: false,
    },
  ]);

  const [todos3 , setTodos3] =  useState([]);
  const nextNo = useRef(9);
  const onChange = (e) => {
    setInputText(e.target.vaue);
  }
  const handlerSubmit = (e) =>{
    e.preventDefault();
      setTodos([...todos, {
        id: nextNo.current += 1,
        text : inputText,
        status : false
    }
  ]);
      setInputText('');
  }
  const handlerDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const [checkbox , setChecbox] = useState(false);

  const handlerCheckStatus = ( { target } ) => {
    const _todos = todos.map(todo => {
      if(todo.id == target.id){
        todo.status = target.checked
      }
      return todo;
    });
    setTodos(_todos);
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
            handlerCheckStatus = {handlerCheckStatus}
            handlerDelete = {handlerDelete}/>
        </TodoTemplate>
        
  );
}

export default App