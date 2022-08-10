import { combineReducers, legacy_createStore as createStore } from "redux";
import dialogsReducer from "./dialogsPageReducer";
import profileReducer from "./profilePageReducer";


let reducers = combineReducers ({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer
})

let store = createStore(reducers)


export default store