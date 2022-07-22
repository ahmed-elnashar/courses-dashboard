import { combineReducers } from "redux";
import themeReducer from "./store/theme";
import announcementsReducer from "./store/announcements";
const rootReducer = combineReducers({
    theme: themeReducer,
    announcements: announcementsReducer
});

export default rootReducer;