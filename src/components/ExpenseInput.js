import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseInput = () => {

    let totalCost = 0;
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const {dispatch, expenses, budget, alert} = useContext(AppContext);

    for(let expense of expenses) {
        totalCost += expense.cost;
    }

    const handleClick = () => {

        if(name && cost && (totalCost + parseInt(cost) <= budget)) {
        dispatch({type: "Add_expense", 
        expense : {name : name, cost : parseInt(cost), id : Math.random()*100}}
        );
        dispatch({type: "set_filtered_expense"})
        setName('');
        setCost('');
        dispatch({type : 'set_alert', alert : {isDisplay : true, color : 'success', text : 'Expense got added successfully...'}})
        }

        if(totalCost + parseInt(cost) > budget) {
            dispatch({type : 'set_alert', alert : {isDisplay : true, color : 'warning', text : 'Entered expense cost above the budget. Kindly click on Edit button and add the budget to add expense..'}})
            console.log('alert triggered :'+ alert.isDisplay)
        }

        if(!(name && cost)) {
            dispatch({type : 'set_alert', alert : {isDisplay : true, color : 'danger', text : 'Kindly enter required details in Add Expense..'}})
        }
    }

    return(
        <div>
        <div className="row">
            <div className="col-md-4">
                <label htmlFor="name">Name</label>
                <sup className="text-danger ms-1">*</sup>
                <input type='text' className="form-control form-control-sm" id="name" onChange={(e)=>{setName(e.target.value)}} value={name}/>
            </div>
            
            <div className="col-md-4">
                <label htmlFor="cost">Cost</label>
                <sup className="text-danger ms-1">*</sup>
                <input type='text' className="form-control form-control-sm" id="cost" onChange={(e)=>{setCost(e.target.value)}} value={cost}/>
            </div>
            
        </div>
        <button className="btn btn-primary mt-3 btn-sm" onClick={handleClick}>Save</button>
        </div>
    )
}

export default ExpenseInput;

