import React, { useContext } from 'react';
import classNames from 'classnames';
import { ViewsCx } from '../../cx';
import CalendarHead from './calendar-head';
import CalendarMain from './calendar-main';
import './styles.css';

const Calendar: React.FC = () => {
    const { activeView } = useContext(ViewsCx);

    const calendarClass = classNames({
        'calendar': true,
        'calendar--mode-list': activeView === 'list'
    });

    return (
        <table className={calendarClass}>
            <CalendarHead />
            <CalendarMain />
        </table>
    );
};

export default Calendar;