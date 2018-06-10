import { combineReducers } from 'redux';

import Todos from './todos';

const Reducers = combineReducers({ todos: Todos });

export default Reducers;
