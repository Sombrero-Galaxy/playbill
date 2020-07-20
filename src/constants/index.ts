import { Month } from '../interfaces';

// months
export const JANUARY = 1;
export const FEBRUARY = 2;
export const MARCH = 3;
export const APRIL = 4;
export const MAY = 5;
export const JUNE = 6;
export const JULY = 7;
export const AUGUST = 8;
export const SEPTEMBER = 9;
export const OCTOBER = 10;
export const NOVEMBER = 11;
export const DECEMBER = 12;

export const MONTHS: Month[] = [
    {
        name: 'Январь',
        code: JANUARY,
    },
    {
        name: 'Февраль',
        code: FEBRUARY,
    },
    {
        name: 'Март',
        code: MARCH
    },
    {
        name: 'Апрель',
        code: APRIL
    },
    {
        name: 'Май',
        code: MAY
    },
    {
        name: 'Июнь',
        code: JUNE
    },
    {
        name: 'Июль',
        code: JULY
    },
    {
        name: 'Август',
        code: AUGUST
    },
    {
        name: 'Сентябрь',
        code: SEPTEMBER
    },
    {
        name: 'Октябрь',
        code: OCTOBER
    },
    {
        name: 'Ноябрь',
        code: NOVEMBER
    },
    {
        name: 'Декабрь',
        code: DECEMBER
    }
];

// api
export const API = 'http://localhost:5000';
export const START = '_START';
export const SUCCESS = '_SUCCESS';
export const FAIL = '_FAIL';

// actions
export const SET_MONTHS = 'SET_MONTHS';
export const TOGGLE_MONTHS = 'TOGGLE_MONTHS';
export const TOGGLE_VIEWS = 'TOGGLE_VIEWS';
export const TOGGLE_DAYS_OF_WEEK = 'TOGGLE_DAYS_OF_WEEK';
export const LOAD_PLAYS = 'LOAD_PLAYS';

// days of week
export const ALL_DAYS_OF_WEEK = {
    name: 'Все',
    code: 'all'
};
export const DAYS_OF_WEEK = [
    {
        name: {
            long: 'Понедельник',
            short: 'Пн'
        },
        code: 1
    },
    {
        name: {
            long: 'Вторник',
            short: 'Вт'
        },
        code: 2
    },
    {
        name: {
            long: 'Среда',
            short: 'Ср'
        },
        code: 3
    },
    {
        name: {
            long: 'Четверг',
            short: 'Чт'
        },
        code: 4
    },
    {
        name: {
            long: 'Пятница',
            short: 'Пт'
        },
        code: 5
    },
    {
        name: {
            long: 'Суббота',
            short: 'Сб'
        },
        code: 6
    },
    {
        name: {
            long: 'Воскресенье',
            short: 'Вс'
        },
        code: 0
    }
];