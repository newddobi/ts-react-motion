import {combineReducers} from 'redux';
import motion from './motion';

export default combineReducers({
    motion: motion.reducer,
});