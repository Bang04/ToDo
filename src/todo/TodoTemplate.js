import React from "react";

import 'bulma/css/bulma.css'

function TodoTemplate({children}){
    return(
        <div className="container is-fullhd">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            <div className="section">
                <div className="title">오늘의 할 일</div>
                <div className="block">{children}</div>
            </div>
        </div>
    )
}
export default TodoTemplate;