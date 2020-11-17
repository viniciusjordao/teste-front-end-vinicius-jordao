// @flow
import { ajax } from 'rxjs/ajax';

// export type WithPagination = {
// 	PageIndex: number,
// 	PageSize: number,
// };

// export type EventRequest = {
// 	PageIndex: number,
// 	PageSize: number,
// 	EventName: string,
// 	EventDate: string,
// };

// export type EventRequestBody = {
// 	name?: string,
// 	partnerName?: string,
// 	identificationDocument?: string,
// 	email?: string,
// 	password?: string,
// 	realizationDate: string,
// };

export type ConsultaRequest = {
	sintomas?: array
};

type HeadersProps = {
	'Content-Type': string,
};

// const basepath = env.REACT_APP_API_URL;
// const endpoint = '/v1/events';

// export const url = `${basepath}${endpoint}`;

// export const withPagination = ({ PageIndex, PageSize }: WithPagination) => (Url: string): string => `${Url}?PageIndex=${PageIndex}&PageSize=${PageSize}`;

// export const withOptionalParams = (key: string) => (value: string | number) => `${value ? `&${key}=${value}` : ''}`;

export const getConsulta = (headers?: HeadersProps) => {

	return ajax.get( 
	'./mocks/consulta.json'
	,
	{
		'Content-Type': 'application/json',
		...headers,
	},
);
}

// export const postEvent = (body: EventRequestBody, headers?: HeadersProps) => ajax.post(`${url}`, { ...body }, {
// 	'Content-Type': 'application/json',
// 	...headers,
// });
