import axios from 'axios';

// Initial State
const initialState = {
    loading: false,
    announcements: [],
    error: ''
};

// Action Types
const FETCH_ANNOUNCEMENTS_REQUEST = 'FETCH_ANNOUNCEMENTS_REQUEST';
const FETCH_ANNOUNCEMENTS_SUCCESS = 'FETCH_ANNOUNCEMENTS_SUCCESS';
const FETCH_ANNOUNCEMENTS_FAILURE = 'FETCH_ANNOUNCEMENTS_FAILURE';

// Reducer
const announcementsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ANNOUNCEMENTS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_ANNOUNCEMENTS_SUCCESS:
            return {
                loading: false,
                announcements: action.payload,
                error: ''
            };
        case FETCH_ANNOUNCEMENTS_FAILURE:
            return {
                loading: false,
                announcements: [],
                error: action.payload
            };
        default:
            return state;
    }
};

export default announcementsReducer;

// Action Creators
export const fetchAnnouncementsRequest = () => {
    return {
        type: FETCH_ANNOUNCEMENTS_REQUEST
    };
};

export const fetchAnnouncementsSuccess = announcements => {
    return {
        type: FETCH_ANNOUNCEMENTS_SUCCESS,
        payload: announcements
    };
};

export const fetchAnnouncementsFailure = error => {
    return {
        type: FETCH_ANNOUNCEMENTS_FAILURE,
        payload: error
    };
};

// https://mockend.com/ahmed-elnashar/courses-dashboard/posts?limit=5
// https://mockend.com/ahmed-elnashar/courses-dashboard/users?limit=5

export const fakeAnnouncementsService = () => {
    return (dispatch) => {
        dispatch(fetchAnnouncementsRequest());
        axios.get('https://mockend.com/ahmed-elnashar/courses-dashboard/posts?limit=5')
            .then(response => {
                const announcements = response.data;
                dispatch(fetchAnnouncementsSuccess(announcements));
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchAnnouncementsFailure(errorMsg));
            });
    };
};