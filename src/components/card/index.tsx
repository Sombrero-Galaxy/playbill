import React, { useContext } from 'react';
import classNames from 'classnames';
import { Play } from '../../interfaces';
import { ViewsCx } from '../../cx';
import Day from '../day';
import './styles.css';

interface CardProps {
    play: Play;
}

const Card: React.FC<CardProps> = ({ play }) => {
    const { activeView } = useContext(ViewsCx);

    const getDate = (dateStr: string): number => new Date(dateStr).getDate();

    const getTime = (dateStr: string): string => {
        const date = new Date(dateStr);
        const hours = date.getHours();
        let minutes: number | string = date.getMinutes();

        if (minutes < 10) {
            minutes = `0${minutes}`;
        }

        return `${hours}:${minutes}`;
    }

    const cardClass = classNames({
        'card': true,
        'card--dir-row': activeView === 'list'
    });
    const dayClass = classNames({
        'card__day': true
    });
    const titleClass = classNames({
        'card__title': true
    });

    return (
        <div className={cardClass}>
            {activeView === 'list' && <Day number={getDate(play.date)} extraClassNames={dayClass} />}
            <div>
                <div className={titleClass}>{play.name}</div>
                <div>{getTime(play.date)}</div>
            </div>
        </div>
    );
};

export default Card;