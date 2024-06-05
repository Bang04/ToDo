import React from "react";

function TodoTemplate({children}){
    return(
        <div className="container is-fullhd">
            <h2 class="title is-2">오늘의 할 일</h2>
            <div>{children}</div>
        </div>
    )
}
export default TodoTemplate;