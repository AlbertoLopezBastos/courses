import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// EXPENSES ACTION GENERATORS ------------------------------

// ADD EXPENSE
const addExpense = (newExpense = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        ...newExpense
    }
});

// REMOVE EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

// EDIT EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// SET TEXT FILTER
const setTextFilter = (text) => ({
    type: 'SET_TEXT_FILTER',
    text
})

// SORT BY AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

// SORT BY DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

// SET START DATE
const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    date
})

// SET END DATE
const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    date
})


// REDUCERS --------------------------------------------------

// DEFAULTS
const expensesReducerDefaultState = [];

// EXPENSES REDUCER
const expensesReducer = (state = expensesReducerDefaultState, action) => {

    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id)
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
                else {
                    return expense;
                }
            });
        default:
            return state;
    }
}

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

// FILTERS REDUCER
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {

        case 'SET_TEXT_FILTER':
            return { ...state, text: action.text }
        case 'SORT_BY_DATE':
            return { ...state, sortBy: 'date' }
        case 'SORT_BY_AMOUNT':
            return { ...state, sortBy: 'amount' }
        case 'SET_START_DATE':
            return { ...state, startDate: action.date }
        case 'SET_END_DATE':
            return { ...state, endDate: action.date }
        default:
            return state;
    }
}

// GET VISIBLE EXPENSES
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;

        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;

        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        }
        else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }

    });
};

// REDUX STORE CREATION
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

// REDUX STORE SUBSCRIBE TO SEE CHANGES
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

// ACTIONS TO TEST

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffe', amount: 300, createdAt: -1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { description: 'New Coffe', amount: 500 }));

//store.dispatch(setTextFilter('Rent'));
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(-5000));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(5000));

const demoState = {
    expenses: [{
        id: 'adasd',
        description: 'January Rent',
        notes: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
}

export default store