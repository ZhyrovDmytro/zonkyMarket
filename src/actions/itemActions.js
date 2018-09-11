import axios from 'axios';
import { GET_ITEMS, ITEMS_LOADING, ERROR } from './actionTypes';

export const getItems = () => dispatch => {
    dispatch(itemsAreLoading());
    axios.get('https://demo3991200.mockable.io/loans/market')
        .then(res => {
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            })
        })
        .catch(err => {
            const error = `Status ${err.response.status} ${err.response.statusText}`
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

//https://api.zonky.cz/loans/marketplace