import React from "react"
const CheckeBox = (props) => {

    return(
        <label className="state-button">
        <input 
            id={props.id}
            type="checkbox" 
            checked={props.status}
            className="checkbox is-medium" 
            onChange={props.handlerCheckStatus} 
    />
    </label>
    )
}

export default CheckeBox

