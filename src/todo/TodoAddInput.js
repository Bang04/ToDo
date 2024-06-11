import React, { useCallback } from "react"
import 'bulma/css/bulma.css'

function TodoAddInput( { inputText, setInputText, handlerSubmit}){

    const handlerChange = useCallback((e) => {
        setInputText(e.target.value);
    } , []);

    return(
        <div className="section">
            <form name="frm" method="post" onSubmit={handlerSubmit}>
            
                <input
                    type="text"
                    className="text is-normal is-success"
                    placeholder="입력해주세요"
                    value={ inputText }
                    onChange={ handlerChange } 
                  />
                <button type="submit" className="submit" name="submit">Add</button>
               
            </form>
        </div>
    )
}

export default TodoAddInput