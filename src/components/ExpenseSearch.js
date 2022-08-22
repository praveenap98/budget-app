
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseSearch = () => {

    const {dispatch} = useContext(AppContext);

    const handleChange = (e) => {
        //  if(e.target.value === "") {
        //      dispatch({type : "set_filtered_expense"})
        //  }
        //  else {
            console.log("search text : "+ e.target.value)
            dispatch({type : "filter_expense", value : e.target.value})
        //}
    }

    return(
        <div className="mt-3">
            <input type='text' className="form-control form-control-sm" placeholder="Type to search..." 
            onChange={handleChange}
            />
        </div>
    )
}

export default ExpenseSearch;