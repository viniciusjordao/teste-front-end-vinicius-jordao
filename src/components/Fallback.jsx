// example - delete later
// @flow
import React from 'react';
import { string, element } from 'prop-types';

const Fallback = ({ className, children }) => <div className={className}>{children}</div>;

Fallback.propTypes = {
  className: string,
  children: element,
};

Fallback.defaultProps = {
  className: '',
};

export default Fallback;
