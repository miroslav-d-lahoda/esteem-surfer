// @flow
import {Client} from 'dsteem';

const client = new Client('https://api.steemit.com');

import type {TtStateType, TtActionType} from '../reducers/types';

export const TT_FETCH_BEGIN = 'TT_FETCH_BEGIN';
export const TT_FETCH_OK = 'TT_FETCH_OK';
export const TT_FETCH_ERROR = 'TT_FETCH_ERROR';


export function fetchTags(afterTag = '', limit = 50) {
    return (dispatch: (action: TtActionType) => void,
            getState: () => TtStateType) => {
        const {trendingTags} = getState();

        if (trendingTags.list.length >= 1) {
            return
        }

        dispatch(fetchBegin());

        client.database.call('get_trending_tags', [afterTag, limit]).then((resp) => {
            dispatch(fetchOk(resp));
        }).catch((err) => {
            dispatch(fetchError());
        })
    };
}


export const fetchBegin = () => {
    return {
        type: TT_FETCH_BEGIN
    }
};

export const fetchOk = (payload) => {
    return {
        type: TT_FETCH_OK,
        payload: payload
    }
};

export const fetchError = () => {
    return {
        type: TT_FETCH_ERROR
    }
};

