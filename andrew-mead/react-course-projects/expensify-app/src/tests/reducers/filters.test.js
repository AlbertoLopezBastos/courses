import filtersReducer from '../../reducers/filters.js';
import moment from 'moment'

const defaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('should set text filter on state', () => {
    const action = {
        type: 'SET_TEXT_FILTER',
        text: 'kiwi'
    }

    const result = filtersReducer(defaultState, action);

    expect(result.text).toBe('kiwi');
});

test('should set sortby to date on state', () => {
    const action = {
        type: 'SORT_BY_DATE'
    }

    const defaultState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    };

    const result = filtersReducer(defaultState, action);

    expect(result.sortBy).toBe('date');
});

test('should set sort by to amount on state', () => {
    const action = {
        type: 'SORT_BY_AMOUNT'
    }

    const result = filtersReducer(defaultState, action);

    expect(result.sortBy).toBe('amount')
});


test('should set startdate on state', () => {
    const startDate = moment();
    const action = {
        type: 'SET_START_DATE',
        date: startDate
    }

    const result = filtersReducer(defaultState, action);

    expect(result.startDate).toEqual(startDate);
});

test('should set enddate on state', () => {
    const endDate = moment();
    const action = {
        type: 'SET_END_DATE',
        date: endDate
    }

    const result = filtersReducer(defaultState, action);

    expect(result.endDate).toEqual(endDate);
});