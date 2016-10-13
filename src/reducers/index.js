import Immutable from 'immutable';
import { GET_ITINERARY, SET_ITINERARY } from '../actions';

const defaultState = Immutable.fromJS({
    itinerary: { title: "", items: [] },
    isLoading: false
});

const activities = (state = defaultState, action) => {
    switch (action.type) {
        case GET_ITINERARY:
            return state.set('isLoading', true);
        case SET_ITINERARY:
            return state.set('itinerary', action.itinerary)
                .set('isLoading', false);
        default:
            return state;
    }
}

export default activities;