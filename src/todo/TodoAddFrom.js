import React, { useCallback } from "react"
import classes from './style.module.css';

function TodoAddFrom( { inputText, setInputText, handlerSubmit}){

    const handlerChange = useCallback((e) => {
        setInputText(e.target.value);
    } , []);

    return(
        <div className={classes.input_frm}>
           <form name="frm" method="post" onSubmit={handlerSubmit}>
                <input
                    type="text"
                    className={classes.input}
                    placeholder="입력해주세요"
                    value={ inputText }
                    onChange={ handlerChange } 
                />
                <button type="submit" className={classes.btn1}>Add</button>
            </form>
        </div>
    )
}

export default TodoAddFrom