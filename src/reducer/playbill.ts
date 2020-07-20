import {
    SET_MONTHS,
    TOGGLE_MONTHS,
    ALL_DAYS_OF_WEEK,
    TOGGLE_DAYS_OF_WEEK,
    LOAD_PLAYS,
    START,
    SUCCESS,
    FAIL
} from '../constants';
import { Playbill, Action } from '../interfaces';
import sortPlays from './utils/sort-plays';

const defState: Playbill = {
    months: {},
    activeMonth: 0,
    activeDay: ALL_DAYS_OF_WEEK.code
};

export default (state: Playbill = defState, action: Action): Playbill => {
    const { type, payload } = action;
    switch (type) {
        case SET_MONTHS:
            return {
                ...state,
                months: payload.months
            };

        case TOGGLE_MONTHS:
            return {
                ...state,
                activeMonth: payload.activeMonth
            }

        case TOGGLE_DAYS_OF_WEEK:
            return {
                ...state,
                activeDay: payload.activeDay
            };

        case LOAD_PLAYS + START: {
            return {
                ...state,
                months: {
                    ...state.months,
                    [payload.code]: {
                        ...state.months[payload.code],
                        loading: true
                    }
                }
            }
        }

        case LOAD_PLAYS + SUCCESS:
            return {
                ...state,
                months: {
                    ...state.months,
                    [payload.code]: {
                        ...state.months[payload.code],
                        days: sortPlays(payload.plays),
                        loading: false,
                        loaded: true
                    }
                }
            };

        case LOAD_PLAYS + FAIL:
            return state;

        default:
            return state;
    }
}
