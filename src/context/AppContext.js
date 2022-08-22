import { createContext, useReducer } from "react"

const initialState = {
    budget : 500,
    isView : true,
    expenses : [
        {name : 'Shopping', cost : 100, id: 1},

    ],
    filteredExpenses : [
        {name : 'Shopping', cost : 100, id: 1},
    ],
}

export const AppContext = createContext();

const AppReducer = (state, action) => {
    switch(action.type) {

        case "initialize_expense": return {
            ...state,
            expenses : action.expenses
        }

        case "Add_expense" : return {
            ...state,
            expenses : [
                ...state.expenses, action.expense
            ]
        };

        case "delete_expense" : return {
            ...state,
            expenses : state.expenses.filter((expense) => expense.id !== action.id),
        }

        case "toggle_budget" : return {
            ...state,
            isView : !state.isView
        }

        case "add_budget" : return {
            ...state,
            budget : state.budget + action.value
        }

        case "filter_expense" : return {
            ...state,
            filteredExpenses : state.expenses.filter((expense) => expense.name.toLowerCase().startsWith(action.value.toLowerCase()))
        }

        case "set_filtered_expense" : return {
            ...state,
            filteredExpenses : state.expenses
        }

        default: return state;
    }
}

export const AppProvider = (props) => {
    const[state, dispatch] = useReducer(AppReducer, initialState);

    return(
        <AppContext.Provider value={
            {
                ...state,
                dispatch : dispatch
            }
        }>
            {props.children}
        </AppContext.Provider>
    )
    
}