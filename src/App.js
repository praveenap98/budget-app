
import Status from './components/Status';
import Expense from './components/Expense'
import './App.css'
import ExpenseInput from './components/ExpenseInput';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';


const App = () => {

    const {expenses, dispatch} = useContext(AppContext);

    useEffect(()=>{
        const exp = JSON.parse(localStorage.getItem('budget-app-data'))
        console.log('expense initilized : '+exp)

        if(exp) {
           dispatch({type : 'initialize_expense', expenses : exp}) 
        }
    }, []);

    useEffect(()=>{
        localStorage.setItem('budget-app-data', JSON.stringify(expenses))
        console.log('expense modified : '+expenses)
        dispatch({type : 'set_filtered_expense'})
    }, [expenses])

    return(
        <div className='container'>
            <h1 className='my-3'>Budget Planner</h1>
            <Status />
            <h2 className='my-3'>Expenses</h2>
            <Expense />
            <h2 className='my-3'>Add Expense</h2>
            <ExpenseInput />
        </div>
    )
}

export default App;