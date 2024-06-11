import React from 'react'; 
import TodoItem from './TodoItem';

import './style.module.css';
import 'bulma/css/bulma.css'

function TodoList({ todos, handlerDelete , onChangeBox}) {
  return (
    <div className='item-list'>
       {todos && todos.map((todo, index) =>(
          <TodoItem 
            key={index}
            idx = { todo.idx}
            text = {todo.text}
            checked = {todo.checked}
            onChangeBox = {onChangeBox}
            handlerDelete = {handlerDelete}
          />
        ))}
    </div>
  )
}

export default TodoList;
