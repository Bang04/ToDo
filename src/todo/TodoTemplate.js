import React from "react";
import classes from './style.module.css';

function TodoTemplate({children}){
    return(
        <div className={classes.container}>
            <div className={classes.container_layout}>
                <div className={classes.title}>오늘의 할 일</div>
                <div className={classes.content}>{children}</div>
            </div>
        </div>
    )
}
export default TodoTemplate;