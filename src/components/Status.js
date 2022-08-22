import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import BudgetEdit from './BudgetEdit';
import BudgetView from './BudgetView';

const Status = () => {

    let totalCost = 0;
    const {budget , expenses, isView}  = useContext(AppContext);
    for(let expense of expenses) {
        totalCost += expense.cost;
    }

    console.log("cost : "+totalCost);

    return(
        <div className='row justify-content-md-center'>
           <div className='col-md-4 mb-2'>
            {
                (isView) ? <BudgetView /> : <BudgetEdit />
            }
           </div> 

           <div className='col-md-4 mb-2'>
           <div className={`alert alert-primary h-100 d-flex align-items-center ${(totalCost >= budget) ? 'alert-danger' : 'alert-primary'}`}>
                <span>Remaining: ₹{budget - totalCost}</span>
           </div>
           </div>

           <div className='col-md-4 mb-2'>
           <div className='alert alert-success h-100 d-flex align-items-center'>
                <span>Spent so far: ₹{totalCost}</span>
           </div>
           </div>
        </div>
    )
}

export default Status;
