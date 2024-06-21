import React from "react"
//import 'bulma/css/bulma.css'
import classes from './style.module.css';

const CheckeBox = (props) => {

    return(
         <input 
            id={props.id}
            type="checkbox" 
            checked={props.status}
            className={classes.checkbox} 
            onChange={props.handlerStatus} 
        />
       
    )
}

export default CheckeBox

