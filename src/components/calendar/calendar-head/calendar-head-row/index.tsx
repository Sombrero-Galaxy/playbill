import React from 'react';
import classNames from 'classnames';
import './styles.css';

interface CalendarHeadRowProps {
    children: React.ReactNode;
}

const CalendarHeadRow: React.FC<CalendarHeadRowProps> = ({ children }) => {
    const rowClass = classNames({
        'calendar__head-row': true
    });

    return <tr className={rowClass}>{children}</tr>;
};

export default CalendarHeadRow;