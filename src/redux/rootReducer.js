import { combineReducers } from "redux";
import themeReducer from "./store/theme";
import announcementsReducer from "./store/announcements";
import quizReducer from "./store/quiz";
import authReducer from './store/auth';

const rootReducer = combineReducers({
    auth: authReducer,
    theme: themeReducer,
    announceData: announcementsReducer,
    quizData: quizReducer,
});

export default rootReducer;