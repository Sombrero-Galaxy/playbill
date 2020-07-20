import { Play, Days } from '../../interfaces';

export default (plays: Play[]): Days => plays
    .reduce((acc: Days, play: Play): Days => {
        const dayOfMonth = new Date(play.date).getDate();

        if (!acc[dayOfMonth]) {
            acc[dayOfMonth] = [];
        }

        acc[dayOfMonth].push(play);

        return acc;
    }, {});