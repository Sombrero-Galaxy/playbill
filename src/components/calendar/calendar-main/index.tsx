import React, { useState, useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import { getActiveMonth, getDays } from '../../../selectors';
import { ViewsCx } from '../../../cx';
import { Days } from '../../../interfaces';
import CalendarMainRow from './calendar-main-row';
import CalendarMainCell from './calendar-main-cell';

const CalendarMain: React.FC = () => {
    const { activeView } = useContext(ViewsCx);
    const days: Days = useSelector((state) => getDays(state, activeView === 'list'));

    const month = useSelector(getActiveMonth);
    const [daysInMonth, setDaysInMonth] = useState(0);
    const [firstDayInMonth, setFirstDayInMonth] = useState(0);

    useEffect(() => {
        const getDaysInMonth = (year: number, month: number): number => (
            new Date(year, month, 0).getDate()
        );

        if (month) {
            setDaysInMonth(getDaysInMonth(month.year as number, month.code));
        }
    }, [month]);

    useEffect(() => {
        const getFirstDayInMonth = (year: number, month: number): number => (
            new Date(year, month - 1, 1).getDay()
        );

        if (month) {
            setFirstDayInMonth(getFirstDayInMonth(month.year as number, month.code));
        }
    }, [month]);

    const getRows = (): React.ReactNode[] => {
        const rows: React.ReactNode[] = [];
        let daysCount = 1;

        for (let week = 1; week <= 6; week += 1) {
            if (daysCount > daysInMonth) break;

            const cells: React.ReactNode[] = [];

            for (let day = 1; day <= 7; day += 1) {
                const isFirstWeekInMonth = week === 1;
                const firstDayInMonthIsSunday = firstDayInMonth === 0;
                const isLastCellInRow = day === 7;

                let dayOfMonth: number = 0;

                if (
                    isFirstWeekInMonth
                    && firstDayInMonthIsSunday
                    && isLastCellInRow
                ) {
                    dayOfMonth = daysCount;
                    daysCount += 1;
                } else if (
                    isFirstWeekInMonth
                    && !firstDayInMonthIsSunday
                    && (day >= firstDayInMonth)
                ) {
                    dayOfMonth = daysCount;
                    daysCount += 1;
                } else if (!isFirstWeekInMonth && (daysCount <= daysInMonth)) {
                    dayOfMonth = daysCount;
                    daysCount += 1;
                }

                const isWeekend = day === 6 || day === 7;

                const plays = days?.[dayOfMonth] ?? [];
                if (activeView === 'calendar' || (activeView === 'list' && dayOfMonth && (plays.length !==0))) {
                    const cell = (
                        <CalendarMainCell
                            plays={plays}
                            key={`week-${week}-day-${day}`}
                            dayOfMonth={dayOfMonth}
                            isWeekend={isWeekend}
                        />
                    );
                    cells.push(cell);
                }
            }

            if (activeView === 'calendar' || (activeView === 'list' && cells.length !== 0)) {
                const row = (
                    <CalendarMainRow key={`week-${week}`}>
                        { cells }
                    </CalendarMainRow>
                );
                rows.push(row);
            }
            
        }

        return rows;
    };

    return (
       <tbody>
           {getRows()}
       </tbody>
    );
};

export default CalendarMain;