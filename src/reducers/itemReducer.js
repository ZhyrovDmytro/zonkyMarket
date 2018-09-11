import { GET_ITEMS, ITEMS_LOADING, ERROR, SORT_BY_NAME, SORT_BY_RATING, SORT_BY_AMOUNT, SORT_BY_DEADLINE, SORT_BY_DURATION } from '../actions/actionTypes'
import moment from 'moment';

const initialState = {
    items: [],
    error: '',
    loading: false
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false
            };
        case SORT_BY_NAME:
            return {
                ...state,
                items: state.items.sort((a, b) => {
                    if(a.name.toUpperCase() < b.name.toUpperCase()) return -1;
                    if(a.name.toUpperCase() > b.name.toUpperCase()) return 1;

                    return 0;
                })
            };
        case SORT_BY_RATING:
            return {
                ...state,
                items: state.items.sort((a, b) => {
                    if (a.rating.length > b.rating.length ) return -1;
                    if (a.rating.length < b.rating.length ) return 1;

                    if(a.rating.toUpperCase() < b.rating.toUpperCase()) return -1;
                    if(a.rating.toUpperCase() > b.rating.toUpperCase()) return 1;
                    return 0;
                })
            };
        case SORT_BY_AMOUNT:
            return {
                ...state,
                items: state.items.sort((a, b) => {
                    if(a.amount < b.amount) return -1;
                    if(a.amount > b.amount) return 1;
                    return 0;
                })
            };
        case SORT_BY_DEADLINE:
            return {
                ...state,
                items: state.items.sort((a, b) => {
                    const deadlineA = moment(a.deadline).format('x');
                    const deadlineB = moment(b.deadline).format('x');
                    if(deadlineA < deadlineB) return -1;
                    if(deadlineA > deadlineB) return 1;
                    return 0;
                })
            };
        case SORT_BY_DURATION:
            return {
                ...state,
                items: state.items.sort((a, b) => {
                    const nowTime = moment();
                    const durationA = moment.duration(nowTime.diff(a.datePublished))
                    const durationB = moment.duration(nowTime.diff(b.datePublished))
                    if(durationA < durationB) return -1;
                    if(durationA > durationB) return 1;
                    return 0;
                })
            };
        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            };
        case ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}