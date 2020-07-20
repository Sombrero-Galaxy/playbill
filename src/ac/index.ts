import {
    JANUARY,
    FEBRUARY,
    DECEMBER,
    MONTHS,
    SET_MONTHS,
    TOGGLE_MONTHS,
    TOGGLE_DAYS_OF_WEEK,
    API,
    START,
    SUCCESS,
    FAIL,
    LOAD_PLAYS
} from '../constants';
import { Dispatch } from 'redux';
import { Month, Months} from '../interfaces';
import { playsLoading, playsLoaded } from '../selectors';

export const setMonths = () => (dispatch: Dispatch, getState: () => any) => {
    const date = new Date();

    const curMonth = date.getMonth() + 1;
    const curYear = date.getFullYear();

    const secondMonth = curMonth === DECEMBER
        ? JANUARY
        : curMonth + 1;

    const thirdMonth = secondMonth === DECEMBER
        ? JANUARY
        : secondMonth + 1;

    const months = MONTHS
        .filter(({ code }) => (
            code === curMonth
            || code === secondMonth
            || code === thirdMonth
        ))
        .map((month) => {
            if (month.code >= JANUARY && month.code <= FEBRUARY && curMonth > FEBRUARY) {
                month.year = curYear + 1;
            } else if (month.code >= JANUARY && curMonth >= JANUARY) {
                month.year = curYear;
            }

            if (month.code === JANUARY) {
                month.name = `${month.name} ${month.year}`;
            }

            return month;
        })
        .reduce((acc: Months, month: Month): Months => {
            acc[month.code] = month;
            return acc;
        }, {});

    dispatch({
        payload: { months },
        type: SET_MONTHS
    });

    dispatch({
        payload: {
            activeMonth: curMonth
        },
        type: TOGGLE_MONTHS
    });
};

export const toggleMonths = (activeMonth: number) => (dispatch: Dispatch, getState: () => any) => {
    dispatch({
        payload: { activeMonth },
        type: TOGGLE_MONTHS
    });
};

export const toggleDaysOfWeek = (activeDay: number | string) => (dispatch: Dispatch, getState: () => any): void => {
    dispatch({
        payload: { activeDay },
        type: TOGGLE_DAYS_OF_WEEK
    });
};

export const loadPlays = (month: Month) => async (dispatch: Dispatch, getState: () => any) => {
    const isLoading = playsLoading(getState(), month.code);
    const isLoaded = playsLoaded(getState(), month.code);

    if (isLoading || isLoaded) return;

    dispatch({
        payload: {
            code: month.code
        },
        type: LOAD_PLAYS + START
    });

    try {
        const url = `${API}/plays?year=${month.year}&month=${month.code}`;
        const res = await fetch(url, {
            method: 'GET'
        });
        const plays = await res.json();

        dispatch({
            type: LOAD_PLAYS + SUCCESS,
            payload: { 
                code: month.code,
                plays 
            }
        });
    } catch (err) {
        dispatch({
            type: LOAD_PLAYS + FAIL
        });
    }
};
