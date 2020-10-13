import React from 'react'
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ExpenseListItem from '../../components/ExpenseListItem.js';
import expenses from '../fixtures/expenses.js';

test('should render ExpenseListItem correctly', () => {
    const wrapper = shallow(<ExpenseListItem expense={expenses[0].description, expenses[0].amount, expenses[0].createdAt, expenses[0].id} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
})