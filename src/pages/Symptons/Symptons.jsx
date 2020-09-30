import React, { useCallback } from 'react';
import Layout from '../../containers/Layout/Layout'
import { connect } from 'react-redux';
import { getConsultaDispatcher, type Consulta } from '../../store/ducks/consulta';
import { type State } from '../../store/ducks';

export type Props = {
	...State,
	getConsulta: (payload: any) => {},
};

export const Symptons = ({getConsulta}:Props) => {

    const GetConsulta = useCallback(() => {
		getConsulta({
		});
	}, [getConsulta]);

	getConsulta();

	console.log(getConsulta());

  return (
    <Layout>
    <div className="home">
        Sintomas
    </div>
    </Layout>
  );
}

export default connect(
	({ consultaState: { data, success, errorMessages, error, fetching } }) => ({
		data,
		error,
		fetching,
		success,
		errorMessages,
	}),
	{
		getConsulta: getConsultaDispatcher,
	},
)(Symptons);
