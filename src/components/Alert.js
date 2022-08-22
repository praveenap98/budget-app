import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { BsInfoCircleFill } from 'react-icons/bs'

const Alert = () => {

    const {alert, dispatch} = useContext(AppContext);

    return (
        <>
            <div class={`alert alert-${alert.color}`} role="alert">
                <BsInfoCircleFill className="me-2" size='1.1em' />
                {alert.text}
            </div>
            {console.log(setTimeout(()=> dispatch({type : 'set_alert', alert : {isDisplay : false, color : '', text : ''}}), 5000))}
        </>
        
    )
}

export default Alert;