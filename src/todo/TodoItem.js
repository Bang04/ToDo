import React from "react"
import CheckeBox from "./Checkbox";
import './style.module.css';

function TodoItem({idx, text, checked, onChangeBox , handlerDelete}){

    return (
      <div key={idx} className='item' >
        <span>{idx}</span>

        <CheckeBox
            checked = {checked} 
            onChangeBox = {onChangeBox}
            idx = {idx}
        />

        <span className="text has-text-grey-dark">{text}</span>
        <button onClick={() => handlerDelete(idx)} className="delete is-medium" type='button'></button>
      </div>
    );
}

export default TodoItem