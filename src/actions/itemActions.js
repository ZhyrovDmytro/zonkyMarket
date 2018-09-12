import axios from 'axios';
import { GET_ITEMS, ITEMS_LOADING, ERROR } from './actionTypes';

export const getItems = () => dispatch => {
    dispatch(itemsAreLoading());
    axios.get('https://api.zonky.cz/loans/marketplace')
        .then(res => {
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            })
        })
        .catch(err => {
            const error = err.response ? `Status ${err.response.status} ${err.response.statusText}` : 'Error! Try to disable CROSS-ORIGIN security in browser. Use flags --disable-web-security --user-data-dir'
            dispatch({
                type: ERROR,
                payload: error
            })
        })
};

export const handleSortingMethod = (actionName) => dispatch => {
    dispatch({
        type: actionName
    })
}

export const itemsAreLoading = item => {
    return {
        type: ITEMS_LOADING
    };
};

//  Mockable data
//https://demo3991200.mockable.io/loans/market