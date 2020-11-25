import React, { useCallback, useLayoutEffect, useEffect } from 'react';
import Layout from '../../containers/Layout/Layout'
import { connect } from 'react-redux';
import { getConsultaDispatcher, type Consulta } from '../../store/ducks/consulta';
import { type State } from '../../store/ducks';

export type Props = {
	getConsulta: (payload: any) => {},
};

export const Symptons = ({fetching, data, sintomas, getConsulta}:Props) => {
    // const GetConsulta = useCallback(() => {
	// 	getConsulta({
	// 	});
	// }, [getConsulta]);

	// useLayoutEffect(() => {
	// 	GetConsulta();
	// 		return () => { }
	// }, [fetching, sintomas , GetConsulta]);

	useEffect(() => {
		getConsulta();
	}, [])
	console.log(fetching, data, 'tteste');
  return (
    <Layout>
    <div className="home">
  { data?.sintomas.map((consulta: Consulta) => ( 
	  <div>
		<h2>{consulta.id}</h2>
		<p>{consulta.texto}</p>
	  </div>
  ))}
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
