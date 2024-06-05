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
  ]);
  const nextNo = useRef(4);

  const onChange = (e) => {
   const text  = e.target.value;
    setTodos({...todos, text});
  }

  const handlerAdd = () => (
    (inputText)=> { 
      setTodos(todos.concat( 
        {
          idx: nextNo.current += 1,
          inputText,
          checked : false
        }
      ));
      setInputText('');
    }
  )
  
  // const handlerSubmit = (e) =>{
  //   e.preventDefault();
  //   if(inputText.trim() !== ''){
  //     console.log("inputText : "+ inputText);
  //     setTodos([...todos, handlerAdd]);
  //     setInputText('');
  //   }
  // }

  const handlerDelete = (idx) => {
    setTodos(todos.filter(todos => todos.idx !== idx));
  }

  return(
    
        <TodoTemplate >
          <TodoAddInput 
            inputText = {inputText}
            setInputText = {setInputText}
            handlerAdd = {handlerAdd}
          />
          <TodoList 
            todos = {todos} 
            handlerDelete = {handlerDelete}/>
        </TodoTemplate>
        
  );
}

export default App