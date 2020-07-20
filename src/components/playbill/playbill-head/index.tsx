import React, { useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import { toggleMonths } from '../../../ac';
import { getMonths, getActiveMonth } from '../../../selectors';
import TabsList from '../../tabs/tabs-list';
import { ViewsCx } from '../../../cx';
import './styles.css';

const PlaybillHead: React.FC = () => {
    const { views, activeView, toggleViews } = useContext(ViewsCx);

    const months = useSelector(getMonths);
    const activeMonth = useSelector(getActiveMonth);

    const playbillHeadClass = classNames({
        'playbill__head': true
    });

    const tabsListClass = classNames({
        'playbill__head-tabs-list': true
    });

    const dispatch = useDispatch();

    const getMonthsTabsList = (): React.ReactNode | null => {
        if (!months || months.length === 0) return null;

        const toggleTabs = (code: string | number): void => {
            dispatch(toggleMonths(code as number));
        };

        return (
            <TabsList
                tabs={months}
                toggleTabs={toggleTabs}
                activeCode={activeMonth.code}
                extraClassNames={tabsListClass}
            />
        );
    };

    const getViewsTabsList = (): React.ReactNode | null => {
        if (!toggleViews) return null;
        
        return (
            <TabsList
                tabs={views}
                toggleTabs={toggleViews}
                activeCode={activeView}
                extraClassNames={tabsListClass}
            />
        );
    };

    return (
        <div className={playbillHeadClass}>
            <h1>Афиша</h1>
            {getMonthsTabsList()}
            {getViewsTabsList()}
        </div>
    );
};

export default PlaybillHead;