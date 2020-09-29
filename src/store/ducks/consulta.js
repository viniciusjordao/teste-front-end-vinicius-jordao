// @flow
import { combineEpics } from 'redux-observable';
import { distinctUntilChanged, map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { getConsulta} from '../../services/consultaService';

// flow-typed
// export type Contact = {
// 	name?: string,
// 	email?: string,
// 	identificationNumber?: string,
// 	phoneNumber?: number,
// 	photoUrl?: string,
// };

// export type EventContact = {
// 	id: string,
// 	isPrincipalContact: boolean,
// 	contact: Contact
// };

// export type Event = {
// 	id?: string,
// 	name?: string,
// 	realizationDate?: string,
// 	city?: string,
// 	state?: string,
// 	siteUrl?: string,
// 	eventContactList?: Array<EventContact>,
// };

export type Consulta = {
	simtomas?: array,
};
// end flow-typed

export const Types = {
    GET_CONSULTA: '@@consulta/GET_ALL',
    GET_CONSULTA_SUCCESS: '@@consulta/GET_ALL_SUCCESS',
    GET_CONSULTA_ERROR: '@@consulta/GET_ALL_ERROR',
};

const initialState: StateTyped<Event> = {
	errorMessages: [],
	success: false,
	fetching: false,
}

const consultaReducer = (
	state: StateTyped<Event> = initialState,
	{ type, payload }: Action,
): StateTyped<Event> => {
	switch (type) {
		// GET_ALL
		case Types.GET_CONSULTA:
			return { ...state, ...payload, fetching: true, success: false };
		case Types.GET_CONSULTA_SUCCESS:
			return { ...state, ...payload, fetching: false };
		case Types.GET_EVENTS_ERROR:
			return { ...state, ...payload, fetching: false };
		// // CREATE
		// case Types.CREATE_EVENT:
		// 	return { ...state, ...payload, fetching: true, success: false };
		// case Types.CREATE_EVENT_SUCCESS:
		// 	return { ...state, ...payload, fetching: false };
		// case Types.CREATE_EVENT_ERROR:
		// 	return { ...state, ...payload, fetching: false };
		default:
			return state;
	}
};


// Action Creators
// GET_ALL
export const getConsultaDispatcher = (payload: Consulta) => ({ type: Types.GET_CONSULTA, payload });
export const getConsultaResponse = ({ response }: { response: {} }) => ({ type: Types.GET_CONSULTA_SUCCESS, payload: { ...response } });
export const getConsultaErrorResponse = ({ response }: { response: {} }) => ({ type: Types.GET_CONSULTA_ERROR, payload: { ...response, data: { items: [] } } });

// Epics
const getConsultaEpic = action$ => 
	action$
		.ofType(Types.GET_EVENTS)
		.pipe(
			switchMap(({ payload }) => 
				getConsulta(payload)
					.pipe(
						distinctUntilChanged(),
						map(getConsultaResponse),
						catchError((error) => of(getConsultaErrorResponse(error))),
					),
			),
		);

export const consultaEpic = combineEpics(getConsultaEpic);

export const consultaReducers = {
	consultaState: consultaReducer,
};
