import React, { useContext } from 'react';
import classNames from 'classnames';
import { DAYS_OF_WEEK, ALL_DAYS_OF_WEEK } from '../../../constants';
import { ViewsCx } from '../../../cx';
import CalendarHeadRow from './calendar-head-row';
import CalendarHeadCell from './calendar-head-cell';

const CalendarHead: React.FC = () => {
    const { activeView } = useContext(ViewsCx);

    const headClass = classNames({
        'calendar__head': true
    });

    const getFirstCellInList = (): React.ReactNode => {
        const tab = {
            name: ALL_DAYS_OF_WEEK.name,
            code: ALL_DAYS_OF_WEEK.code
        }
        return <CalendarHeadCell key={ALL_DAYS_OF_WEEK.code} tab={tab} />;
    };

    const cells = DAYS_OF_WEEK.map((day) => {
        const tab = {
            name: day.name.short,
            code: day.code
        };
        return <CalendarHeadCell key={day.code} name={day.name.long} tab={tab} />
    });

    return (
       <thead className={headClass}>
           <CalendarHeadRow>
                {activeView === 'list' && getFirstCellInList()}
                {cells}
           </CalendarHeadRow>
       </thead>
    );
};

export default CalendarHead;