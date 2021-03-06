import React from 'react'
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ExpenseForm from '../../components/ExpenseForm.js';
import expenses from '../fixtures/expenses.js';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';


test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should render ExpenseForm with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('Should render error for invalid forms submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('Should set description on input change', () => {
    const value = 'New Description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: {
            value
        }
    });

    expect(wrapper.state('description')).toBe(value);

});

test('should set note on texarea change', () => {
    const value = 'New note';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
        target: {
            value
        }
    });

    expect(wrapper.state('note')).toBe(value);
});

test('should set amount if valid input', () => {
    const value = '12.12';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: {
            value
        }
    });
    expect(wrapper.state('amount')).toBe(value);
});

test('should no set amount if invalid input', () => {
    const value = '12.122';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: {
            value
        }
    });

    expect(wrapper.state('amount')).toBe('');
});

test('shoudl call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);

    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });

    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith(
        {
            description: expenses[0].description,
            amount: expenses[0].amount,
            note: expenses[0].note,
            createdAt: expenses[0].createdAt
        });
});

test('should set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find(SingleDatePicker).prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendarFocused on focus change', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find(SingleDatePicker).prop('onFocusChange')({ focused });

    expect(wrapper.state('calendarFocused')).toBe(focused);
})