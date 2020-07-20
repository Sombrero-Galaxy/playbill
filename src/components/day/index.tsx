import React from 'react';
import classNames from 'classnames';
import './styles.css';

interface DayProps {
    number: number;
    isHoliday?: boolean;
    extraClassNames?: string;
}

const Day: React.FC<DayProps> = ({ number, isHoliday, extraClassNames }) => {
    const dayClass = classNames({
        'day': true,
        'day--holiday': isHoliday
    }, extraClassNames);

    return <b className={dayClass}>{number}</b>
};

export default Day;