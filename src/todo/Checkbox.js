import React from "react"
const CheckeBox = ({checked ,onChangeBox, idx}) => {
    return(
        <input 
            onChange={(e) => onChangeBox(e.target.value, idx)} 
            type="checkbox" 
            name="state" 
            className="checkbox is-medium" 
            defaultChecked = {checked} 
    />
    )
}

export default CheckeBox

