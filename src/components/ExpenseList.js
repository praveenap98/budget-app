import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
    const {filteredExpenses} = useContext(AppContext);
    console.log(filteredExpenses);
    return(
        <div className="list-group mt-3">
            {
                filteredExpenses.map((expense) => <ExpenseItem expense={expense} key={expense.id}/> )
            }
        </div>
    )
}

export default ExpenseList;