import itemReducer from '../reducers/itemReducer'
import * as actionTypes from '../actions/actionTypes';

describe('itemReducer', () => {
    it('should return initial state', () => {
        expect(itemReducer(undefined, {})).toEqual({
            items: [],
            error: '',
            loading: false
        });
    });

    it('return array of items', () => {
        expect(itemReducer({
            items: [],
            error: '',
            loading: false
        }, {
            type: actionTypes.GET_ITEMS,
            payload: [1, 2, 3]
        })).toEqual({
            items: [1, 2, 3],
            error: '',
            loading: false
        })
    })
});