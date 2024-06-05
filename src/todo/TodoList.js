import React from 'react'; 
import TodoItem from './TodoItem';

import './TodoList.module.css';
import 'bulma/css/bulma.css'

function TodoList({ todos, handlerDelete }) {
  return (
    <div>
       {todos && todos.map((todo) =>(
          <TodoItem 
            idx = { todo.idx}
            text = {todo.text}
            checked = {todo.checked}
            handlerDelete = {handlerDelete}
          />
        ))}
    </div>
  )
}

export default TodoList;
