import React, { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { setMonths, loadPlays, toggleDaysOfWeek } from '../../ac';
import { getActiveMonth } from '../../selectors';
import useViews from '../../hooks/use-views';
import { ViewsCx } from '../../cx';
import { ALL_DAYS_OF_WEEK} from '../../constants';
import PlaybillHead from './playbill-head';
import Calendar from '../calendar';
import './styles.css';

const Playbill: React.FC = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(setMonths());
    }, []);

    const activeMonth = useSelector(getActiveMonth);

    useEffect(() => {
        if (activeMonth) {
            dispatch(loadPlays(activeMonth));
        }
    }, [activeMonth]);

    const views = useViews({
        views: [
            {
                code: 'calendar',
                name: 'Календарь',
            },
            {
                code: 'list',
                name: 'Список',
            }
        ],
        activeView: 'calendar'
    });

    useEffect(() => {
        if (views.activeView === 'calendar') {
            dispatch(toggleDaysOfWeek(ALL_DAYS_OF_WEEK.code));
        }
    }, [views.activeView]);

    const playbillClass = classNames({
        'playbill': true
    });

    return (
        <ViewsCx.Provider value={views}>
            <div className={playbillClass}>
                <PlaybillHead />
                <Calendar />
            </div>
        </ViewsCx.Provider>
    );
};

export default Playbill;