import Immutable from 'immutable'; 
import itinerary from './itinerary.json'

export const GET_ITINERARY = 'GET_ITINERARY';
export const SET_ITINERARY = 'SET_ITINERARY';

const getItinerary = () => {
    return {
        type: GET_ITINERARY
    };
};

const setItinerary = itinerary => {
    return {
        type: SET_ITINERARY,
        itinerary: Immutable.fromJS(itinerary)
    };
};

export const loadItinerary = () => dispatch => {
    dispatch(getItinerary());

    setTimeout(function () {
        dispatch(setItinerary(itinerary));
    }, 100);
};