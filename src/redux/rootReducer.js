import { combineReducers } from "redux";
import themeReducer from "./store/theme";
import announcementsReducer from "./store/announcements";
import quizReducer from "./store/quiz";

const rootReducer = combineReducers({
    theme: themeReducer,
    announceData: announcementsReducer,
    quizData: quizReducer
});

export default rootReducer;