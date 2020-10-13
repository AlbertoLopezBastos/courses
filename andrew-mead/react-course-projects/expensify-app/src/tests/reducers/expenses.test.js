import expensesReducer from '../../reducers/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses.js';


test('should set default state', () => {
    const result = expensesReducer(undefined, { type: '@@INIT' });

    expect(result).toEqual([]);
})

test('should add Expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: expenses[1]
    }

    const result = expensesReducer(expenses, action)

    expect(result).toEqual([...expenses, expenses[1]]);
});

test('should edit Expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            description: 'hello'
        }
    }

    const result = expensesReducer(expenses, action)
    expect(result[1].description).toBe('hello');
});

test('should not edit Expense if expense not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            description: 'hello'
        }
    }

    const result = expensesReducer(expenses, action)
    expect(result).toEqual(expenses);
});

test('should remove Expense', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }

    const result = expensesReducer(expenses, action);

    expect(result).toEqual([
        expenses[0], expenses[2]
    ]);
});

test('should not remove Expense if not id found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }

    const result = expensesReducer(expenses, action);

    expect(result).toEqual(expenses);
});