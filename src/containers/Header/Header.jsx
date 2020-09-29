// @flow
import React from 'react';
// import Header from '@dmj/shared/lib/shared/components/Header/Header';
// import useMediaQueries from '@dmj/shared/lib/shared/hooks/UseMediaQueries/UseMediaQueries';
// import { isMobile } from '@dmj/shared/lib/styles';
import { string} from 'prop-types';

// import { ReactComponent as SVGSearchIcon } from '@dmj/shared/lib/assets/images/icons/ico_search.svg';
// import { IconProfile } from '@dmj/shared/lib/shared/components/Icons/IconProfile';
import { ReactComponent as SVGLogo } from 'logo.svg';
import styled from 'styled-components';
// import './Home.scss';

export const Content = styled.div`
	display:flex;
	flex-direction: column;
	width:100%;
	font-size:21px;
	line-height:30px;
	font-weight:600;
	color: #00B2BB;
	text-transform: uppercase;


`;

const Header = ({ className }: { className: string }) => {

	return (
		<Content>
			<SVGLogo/>
			<p>Pronto atendimento virtual</p>
		</Content>
	);
};

Header.propTypes = {
	className: string,
};

export default Header;
