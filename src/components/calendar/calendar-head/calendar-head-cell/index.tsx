import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { ViewsCx } from '../../../../cx';
import { toggleDaysOfWeek } from '../../../../ac';
import { getActiveDay } from '../../../../selectors';
import Tab from '../../../tabs/tab';
import './styles.css';

interface CalendarHeadCellProps {
    name?: string;
    tab: Tab;
}

const CalendarHeadCell: React.FC<CalendarHeadCellProps> = ({ name, tab }) => {
    const { activeView } = useContext(ViewsCx);

    const activeDay = useSelector(getActiveDay);

    const dispatch = useDispatch();

    const cellClass = classNames({
        'calendar__head-cell': true
    })

    const getTab = (): React.ReactNode => {
        const toggleTabs = (code: number | string): void => {
            dispatch(toggleDaysOfWeek(code));
        };
        return (
            <Tab
                tab={tab}
                toggleTabs={toggleTabs}
                isActive={tab.code === activeDay}
            />
        );
    };
    
    return (
        <th className={cellClass}>
            {
                activeView === 'calendar'
                    ? name
                    : getTab()
            }
        </th>
    );
};

export default CalendarHeadCell;
