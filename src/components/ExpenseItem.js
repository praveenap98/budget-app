import React, { useContext } from 'react';
import {IoMdCloseCircle} from 'react-icons/io'
import { AppContext } from '../context/AppContext';

const ExpenseItem = ({expense}) => {

    const {dispatch} = useContext(AppContext);

    const handleClick = () => {
        dispatch({type: "delete_expense", id:expense.id})
        dispatch({type: "set_filtered_expense"})
    }


    return(
        <div className="list-group-item d-flex justify-content-between">
            <span>{expense.name}</span>
            <div className="d-flex align-items-center">
                <span className="me-3 badge rounded-pill text-bg-primary">₹{expense.cost}</span>
                <IoMdCloseCircle size="1.5em" onClick={handleClick}/>
            </div>
         </div>
    )
}

export default ExpenseItem;