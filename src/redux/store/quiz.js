import axios from 'axios';

// Initial State
const initialState = {
    loading: false,
    quizzes: [],
    error: ''
};

// Action Types
const FETCH_QUIZ_REQUEST = 'FETCH_QUIZ_REQUEST';
const FETCH_QUIZ_SUCCESS = 'FETCH_QUIZ_SUCCESS';
const FETCH_QUIZ_FAILURE = 'FETCH_QUIZ_FAILURE';

// Reducer
const quizReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_QUIZ_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_QUIZ_SUCCESS:
            return {
                loading: false,
                quiz: action.payload,
                error: ''
            };
        case FETCH_QUIZ_FAILURE:
            return {
                loading: false,
                quiz: [],
                error: action.payload
            };
        default:
            return state;
    }
};

export default quizReducer;

// Action Creators
export const fetchQuizRequest = () => {
    return {
        type: FETCH_QUIZ_REQUEST
    };
};

export const fetchQuizSuccess = quiz => {
    return {
        type: FETCH_QUIZ_SUCCESS,
        payload: quiz
    };
};

export const fetchQuizFailure = error => {
    return {
        type: FETCH_QUIZ_FAILURE,
        payload: error
    };
};

export const fakeQuizService = () => {
    return (dispatch) => {
        dispatch(fetchQuizRequest());
        axios.get('https://mockend.com/ahmed-elnashar/courses-dashboard/quiz?limit=2')
            .then(response => {
                const quiz = response.data;
                dispatch(fetchQuizSuccess(quiz));
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchQuizFailure(errorMsg));
            });
    };
};