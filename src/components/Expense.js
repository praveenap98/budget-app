import React from 'react';
import ExpenseSearch from './ExpenseSearch';
import ExpenseList from './ExpenseList';

const Expenses = () => {
    return(
        <div>
            <ExpenseSearch />
            <ExpenseList />
        </div>
    )
}

export default Expenses;