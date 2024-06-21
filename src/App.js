import React, { useRef, useState } from "react";
import TodoTemplate from "./todo/TodoTemplate"
import TodoList from "./todo/TodoList"
import TodoAddFrom from "./todo/TodoAddFrom";
import { v4 as uuidv4 } from 'uuid';

function App(){

  const [inputText, setInputText] = useState('');
  const [todos2 , setTodos2] =  useState([
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
  const [todos , setTodos] =  useState([]);

  const nextNo = useRef(9);
  const onChange = (e) => {
    setInputText(e.target.vaue);
  }

  const handlerSubmit = (e) =>{
    e.preventDefault();
    if(inputText.length > 0 && inputText !== undefined){
      setTodos([...todos, {
          id: uuidv4(),
          text : inputText,
          status : false
        }
      ]);
    }else{
      alert("할일은 입력해주세요");
      return false;
    }
     
      setInputText('');
  }
  const handlerDelete = ({target}) => {
    setTodos(todos.filter(todo => todo.id !== target.id));
  }

  const handlerStatus = ({target}) => {
    //console.log(target.id);
    //setTodos(todos.map(todo =>
    //   todo.id === target.id ? { status: !target.status } : target.status
    //   )
    // );
console.log("ch : "+target.checked);
    const _todos = todos.map(todo => {
      if(todo.id === target.id){
        todo.status = target.checked
      }
      return todo;
    });

    setTodos(_todos);
  };

  return(
        <TodoTemplate >
          <TodoAddFrom
            inputText = {inputText}
            setInputText = {setInputText}
            onChange = {onChange}
            handlerSubmit = {handlerSubmit}
          />
          <TodoList 
            todos = {todos} 
            handlerStatus = {handlerStatus}
            handlerDelete = {handlerDelete}/>
        </TodoTemplate>
        
  );
}

export default App