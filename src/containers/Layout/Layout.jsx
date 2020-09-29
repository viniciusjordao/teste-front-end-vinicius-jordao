// @flow
import React from 'react';
import { oneOfType, element, arrayOf } from 'prop-types';
import Header from '../Header/Header';
import styled from 'styled-components';
// import './Home.scss';

export const Container = styled.div`
	width:100%;
	margin: 24px 0 0 85px;
	font-family: 'Source Sans Pro', sans-serif;

`;


const Layout = ({ children }: { children: React$Node }) => (
	<Container>
		<main className="home-layout">
			<Header className="layout__header" />
			<main className="layout__container">{children}</main>
		</main>
	</Container>
);

Layout.propTypes = {
	children: oneOfType([element, arrayOf(element)]),
};

export default Layout;
