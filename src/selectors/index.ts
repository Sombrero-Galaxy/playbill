import { createSelector } from 'reselect';
import { Months, Playbill, Days } from '../interfaces';
import { ALL_DAYS_OF_WEEK} from '../constants';

export const getMonths = createSelector(
    (state: any) => state.playbill,
    (playbill: Playbill) => Object.values(playbill.months)
);

export const getActiveMonth = createSelector(
    (state: any) => state.playbill.months,
    (state: any) => state.playbill.activeMonth,
    (months: Months, code: number) => months[code]
);

export const getActiveDay = createSelector(
    (state: any) => state.playbill,
    (playbill: Playbill) => playbill.activeDay
);

export const playsLoading = createSelector(
    (state: any) => state.playbill.months,
    (state: any, code: number) => code,
    (months: Months, code: number) => months[code]?.loading ?? false
);

export const playsLoaded = createSelector(
    (state: any) => state.playbill.months,
    (state: any, code: number) => code,
    (months: Months, code: number) => months[code]?.loaded ?? false
);

export const getDays = createSelector(
    (state: any) => state.playbill.months,
    (state: any) => state.playbill.activeMonth,
    (state: any) => state.playbill.activeDay,
    (state: any, withoutPast: boolean) => withoutPast,
    (
        months: Months,
        activeMonth: number,
        activeDay: number | string,
        withoutPast: boolean
    ) => {
        let allDays = months?.[activeMonth]?.days ?? {};

        // don't show past plays:
        const now = new Date();
        const today = now.getDate();
        const curMonth = now.getMonth() + 1;

        if (withoutPast) {
            allDays = Object.keys(allDays).reduce((acc: Days, dayOfMonth): Days => {
                if ((activeMonth === curMonth) && (+dayOfMonth < today)) {
                    return acc;
                }

                acc[+dayOfMonth] = allDays[+dayOfMonth];
    
                return acc;
            }, {}); 
        }

        // all plays
        if (activeDay === ALL_DAYS_OF_WEEK.code) {
            return allDays;
        }

        // plays on the selected day of the week
        const { year } = months[activeMonth];

        if (!year) return {};

        return Object.keys(allDays).reduce((acc: Days, dayOfMonth): Days => {
            const dayOfWeek = new Date(year, activeMonth - 1, +dayOfMonth).getDay();

            if (activeDay === dayOfWeek) {
                acc[+dayOfMonth] = allDays[+dayOfMonth];
            }

            return acc;
        }, {});

        // default
        return {};
    }
);