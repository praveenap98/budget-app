import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const BudgetEdit = () => {

    const [budget, setBudget]  = useState('');
    const {dispatch} = useContext(AppContext);

    const handleClick = () => {
        if(budget) {
        dispatch({type : "toggle_budget"})
        dispatch({type : "add_budget", value : parseInt(budget)})
        setBudget('')
        }
    }

    return(
        <div className='alert alert-secondary d-flex justify-content-between align-items-center h-100'>
            <div className="w-75 me-2">
            <input type="text" className="form-control form-control-sm" placeholder="Type budget amount..." onChange={(e)=>{setBudget(e.target.value)}} value={budget}/>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <button className="btn btn-success btn-sm me-2" onClick={handleClick}>Save</button>
                <button className="btn btn-primary btn-sm" onClick={()=>{dispatch({type:"toggle_budget"})}}>Cancel</button>
            </div>
            
        </div>
    )
}

export default BudgetEdit;