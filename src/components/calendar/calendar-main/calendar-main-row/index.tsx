import React from 'react';
import classNames from 'classnames';
import './styles.css';

interface CalendarMainRowProps {
    children: React.ReactNode;
}

const CalendarMainRow: React.FC<CalendarMainRowProps> = ({ children }) => {
    const rowClass = classNames({
        'calendar-main__row': true
    });

    return <tr className={rowClass}>{children}</tr>;
};

export default CalendarMainRow;