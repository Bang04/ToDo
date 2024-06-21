import React from "react"
import CheckeBox from "./Checkbox";
import classes from './style.module.css';

//import 'bulma/css/bulma.css'

function TodoItem({id, num,text, status ,handlerStatus, handlerDelete}){

 return (
      <div className={classes.list_item} >
        <span className={classes.index}>{num}</span>
        <CheckeBox 
            id = {id}
            status = {status ? true : false}
            handlerStatus = { handlerStatus } 
          /> 
        <span className={classes.subtitle}>{text}</span>
        <button type="button" onClick={ handlerDelete }  id={id} className={classes.btn2} >x</button>
      </div>
    );
}

export default TodoItem