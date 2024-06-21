import React from 'react'; 
import TodoItem from './TodoItem';

import classes from './style.module.css';

function TodoList({ todos, handlerStatus, handlerDelete}) {
  console.log(todos);
  return (
    <div className={classes.list}>
     
       {todos && todos.map((todo, index) =>(
          <TodoItem
            id={todo.id}
            num={index}
            text = {todo.text}
            status = {todo.status}
            handlerStatus = {handlerStatus}
            handlerDelete = {handlerDelete}
          />
        ))}
    </div>
  )
}

export default TodoList;
