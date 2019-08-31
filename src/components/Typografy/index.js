import React from 'react';
import PropTypes from 'prop-types';

import TextStyled from './styles';

const typografy = props => {
  return <TextStyled {...props} />;
};

typografy.defaultProps = {};

typografy.propTypes = {
  children: PropTypes.string.isRequired,
};

export default typografy;
