import React from 'react';
import PropTypes from 'prop-types';

import TitleStyled from './styles';

const title = props => {
  return <TitleStyled {...props} />;
};

title.defaultProps = {};

title.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
};

export default title;
