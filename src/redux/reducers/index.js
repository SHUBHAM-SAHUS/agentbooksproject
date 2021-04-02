import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { configReducer } from './configReducer';
const reducers = combineReducers({
        authReducer,
        configReducer,
});

export default reducers;
