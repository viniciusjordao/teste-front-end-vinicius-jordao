// @flow
import React, { lazy, Suspense } from 'react';
import { shape, arrayOf, string, bool, object } from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Fallback from '../components/Fallback';

const Pages = ({ history, routes }) => (
	<BrowserRouter history={history}>
		<Switch>
			<Suspense fallback={<Fallback />}>
				{routes.map(({ path, exact, component }) => (
					<Route path={path} exact={exact} component={component} key={path} />
				))}
			</Suspense>
		</Switch>
	</BrowserRouter>
);

Pages.propTypes = {
	history: shape({}),
	routes: arrayOf(
		shape({
			path: string,
			component: object,
			exact: bool,
			isAuth: bool,
		}),
	),
};

Pages.defaultProps = {
	routes: [
		{
			path: '/',
			exact: true,
			component: lazy(() => import('./Home/Home')),
		},
	],
};

export default connect(({ history }) => ({ history }))(Pages);
