import { useReducer } from 'react';
import { TOGGLE_VIEWS } from '../constants';
import { Views, Action } from '../interfaces';

const viewsReducer = (state: Views, action: Action): Views => {
    const { type, payload: { code } } = action;
    switch (type) {
        case TOGGLE_VIEWS:
            return {
                ...state,
                activeView: code
            };
        default:
            return state;
    }
};

export default (defState: Views): Views => {
    const [state, dispatch] = useReducer(viewsReducer, defState);
    const toggleViews = (code: string | number): void => {
        dispatch({
            type: TOGGLE_VIEWS,
            payload: {
                code
            }
        });
    };
    return {
        views: state.views,
        activeView: state.activeView,
        toggleViews
    }
};