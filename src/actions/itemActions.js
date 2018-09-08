import axios from 'axios';
import { GET_ITEMS, ITEMS_LOADING, ERROR } from './actionTypes';

export const getItems = () => dispatch => {
    dispatch(itemsAreLoading());

    fetch('https://api.zonky.cz/loans/marketplace', {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, same-origin, *omit
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
    })
    .then(response => console.log(response)) // parses response to JSON
    .catch((err) => {
        console.log(err)
    })

};

export const itemsAreLoading = item => {
    return {
        type: ITEMS_LOADING
    };
};

//https://api.zonky.cz/loans/marketplace