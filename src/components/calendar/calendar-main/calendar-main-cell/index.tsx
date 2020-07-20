import React, { useContext } from 'react';
import classNames from 'classnames';
import { Play } from '../../../../interfaces';
import { ViewsCx } from '../../../../cx';
import Day from '../../../day';
import Card from '../../../card';
import './styles.css';
import useViews from '../../../../hooks/use-views';

interface CalendarMainCellProps {
    dayOfMonth: number;
    plays: Play[];
    isWeekend?: boolean;
}

const CalendarMainCell: React.FC<CalendarMainCellProps> = ({
    dayOfMonth,
    plays,
    isWeekend
}) => {
    const { activeView } = useContext(ViewsCx);

    const cellClass = classNames({
        'calendar-main__cell': true
    });
    const dayClass = classNames({
        'calendar-main__cell-day': true
    });

    const getCards = (): React.ReactNode | null => {
        if (plays.length === 0) return null;

        return plays.map((play, index) => (
            <Card key={play.id} play={play} />
        ));
    };

    const getDay = () => (dayOfMonth && activeView === 'calendar')
        ? <Day number={dayOfMonth} isHoliday={isWeekend} extraClassNames={dayClass} />
        : null;

    return (
        <td className={cellClass}>
            {getDay()}
            {getCards()}
        </td>
    );
};

export default CalendarMainCell;