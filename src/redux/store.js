import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk),
    ),
    loadFromLocalStorage()
);

function saveToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("persistentState", serializedState);
    } catch (err) {
        console.warn(err);
    }
}

function loadFromLocalStorage() {
    try {
        const serializedState = localStorage.getItem("persistentState");
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (err) {
        console.warn(err);
        return undefined;
    }
}

store.subscribe(() => saveToLocalStorage(store.getState()));


export default store;