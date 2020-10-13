import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage.js';
import expenses from '../fixtures/expenses.js';
import ExpenseForm from '../../components/ExpenseForm.js';

let wrapper, editExpense, removeExpense, history;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = {
        push: jest.fn()
    }
    wrapper = shallow(<EditExpensePage editExpense={editExpense} removeExpense={removeExpense} expense={expenses[0]} history={history} />);
})

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('shoudl handle editExpense', () => {
    wrapper.find(ExpenseForm).prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
});

test('should handle remove Expense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[0].id });
});