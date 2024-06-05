import React from "react"

function TodoItem({idx, text, checked, handlerDelete}){

    return (
      <div key={idx} className='card' >
        <span>{idx}</span>
        <input type="checkbox" id="state" name="state" className="checkbox"  checked={checked} />
        <label for="state"><span>{text}</span></label>
        <div className='buttons'>
          <button onClick={() => handlerDelete(idx)} className="button is-small is-danger is-rounded" type='button'>삭제</button>
        </div>
      </div>
    );
}

export default TodoItem