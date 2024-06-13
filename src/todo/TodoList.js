import React from 'react'; 
import TodoItem from './TodoItem';

import './style.module.css';
import 'bulma/css/bulma.css'

function TodoList({ todos, handlerDelete , handlerCheckStatus}) {
  return (
    <div className='item-list'>
       {todos && todos.map((todo, index) =>(
          <TodoItem 
            key={index}
            id = { todo.id}
            text = {todo.text}
            status = {todo.status}
            handlerCheckStatus = {handlerCheckStatus}
            handlerDelete = {handlerDelete}
          />
        ))}
    </div>
  )
}

export default TodoList;
