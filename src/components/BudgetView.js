import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const BudgetView = () => {

    const {budget, dispatch} = useContext(AppContext);

    return(
        <div className='alert alert-secondary d-flex justify-content-between align-items-center h-100'>
            <span>Budget: ₹{budget}</span>
            <button className='btn btn-primary btn-sm' onClick={()=>{dispatch({type:"toggle_budget"})}}>Edit</button>
        </div>
    )
    
}

export default BudgetView;