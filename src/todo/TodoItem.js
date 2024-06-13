import React from "react"
import CheckeBox from "./Checkbox";
import './style.module.css';

function TodoItem({id, text, status, handlerCheckStatus , handlerDelete}){

    return (
      <div key={id} className='item' >
        <span>{id}</span>

        <CheckeBox
            id = {id}
            status = {status} 
            handlerCheckStatus = {handlerCheckStatus}
        />

        <span className="text has-text-grey-dark">{text}</span>
        <button onClick={() => handlerDelete(id)} className="delete is-medium" type='button'></button>
      </div>
    );
}

export default TodoItem