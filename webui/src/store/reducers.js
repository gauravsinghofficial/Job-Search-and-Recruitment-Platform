import { combineReducers } from "redux";
import { jobReducer } from "./jobReducer"; // Assuming jobReducer is in the same folder

// Combine your reducers here
const rootReducer = combineReducers({
  jobs: jobReducer,
});

export default rootReducer;
