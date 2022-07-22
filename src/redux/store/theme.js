const initialState = {
    sidebar: false
};

// Action Types
const SET_SIDEBAR = 'SET_SIDEBAR';

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SIDEBAR:
            return {
                ...state,
                sidebar: action.payload,
            };
        default:
            return state;
    }
};

export default themeReducer;

// Actions Creators

export const setSidebar = (currentState) => {
    return {
        type: SET_SIDEBAR,
        payload: currentState
    };
};