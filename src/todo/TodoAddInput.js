import React, { useCallback } from "react"

function TodoAddInput( { inputText, setInputText, handlerAdd}){

    const handlerChange = useCallback((e) => {
        setInputText(e.target.value);
    } , []);

    return(
        <div>
            <form name="frm" method="post">
                <input
                    type="text" 
                    naem= "text" 
                    className="text"
                    placeholder="입력해주세요"
                    value={ inputText }
                    onChange={handlerChange} 
                  />
                <button onClick={() => {handlerAdd()}} type="button" className="button" name="submit">등록</button>
                {/* <button type="submit" className="submit" name="submit">등록</button> */}
            </form>
        </div>
    )
}

export default TodoAddInput