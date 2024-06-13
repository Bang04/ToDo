import React from "react"
const CheckeBox = (props) => {
    return(
        <label className="state-button">
        <input 
            type="checkbox" 
            className="checkbox is-medium" 
            checked = {props.status}
            onChange={props.handlerCheckStatus} 
    />
    </label>
    )
}

export default CheckeBox

