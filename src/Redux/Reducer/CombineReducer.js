import { combineReducers } from "redux";
import imageReducer from "./Reducer";

const reducer = combineReducers({
    image: imageReducer
})

export default reducer;