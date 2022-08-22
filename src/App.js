
import Status from './components/Status';
import Expense from './components/Expense'
import './App.css'
import ExpenseInput from './components/ExpenseInput';


const App = () => {
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