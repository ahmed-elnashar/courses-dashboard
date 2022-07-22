import { combineReducers } from "redux";
import themeReducer from "./store/theme";
const rootReducer = combineReducers({
    theme: themeReducer
});

export default rootReducer;