import { combineReducers } from 'redux';
import favouriteReducers from './favouritesReducers';

const rootReducer = combineReducers({
favourite: favouriteReducers,
});

export default rootReducer;