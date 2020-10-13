import { createStore } from 'redux';


// action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => (
    {
        type: 'INCREMENT',
        incrementBy
    });
const decrementCount = ({ decrementBy = 1 } = {}) => (
    {
        type: 'DECREMENT',
        decrementBy
    });
const resetCount = () => (
    {
        type: 'RESET',
    });
const setCount = ({ count = 0 }) => (
    {
        type: 'SET',
        count
    });

// Reducers
// 1. reducers are pure functions
// 2. never changes state or action, only uses them.

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            };
        default:
            return state;
    }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})


// Actions -  es un objeto que se envia al store. Tiene un tipo de accion para hacer en el store.

// increment, decrement, reset

//increment
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

// store.dispatch({
//     type: 'INCREMENT'
// });

// store.dispatch({
//     type: 'RESET'
// });

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 5
// });
// store.dispatch({
//     type: 'DECREMENT'
// });

// store.dispatch({
//     type: 'SET',
//     count: 101
// });

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());
store.dispatch(decrementCount({ decrementBy: 5 }));
store.dispatch(decrementCount());
store.dispatch(resetCount());
store.dispatch(setCount({ count: 101 }));