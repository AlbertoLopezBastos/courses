import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters.js';
import moment from 'moment';

test('should setup set text filter with value', () => {
    const result = setTextFilter('date');

    expect(result).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'date'
    })
})

test('should setup set text filter with default text', () => {
    const result = setTextFilter();

    expect(result).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('should setupsort by date', () => {
    const result = sortByDate()

    expect(result).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test('should setup sort by amount', () => {
    const result = sortByAmount();

    expect(result).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test('should setup start date', () => {
    const result = setStartDate(moment(0));

    expect(result).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should setup end date', () => {
    const result = setEndDate(moment(0));

    expect(result).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})