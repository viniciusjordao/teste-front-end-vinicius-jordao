import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { consultaEpic, consultaReducers } from './consulta';

export const rootEpic = combineEpics(
	consultaEpic
);

export const rootReducer = combineReducers({
 ...consultaReducers
});
