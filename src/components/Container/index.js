import React from 'react';
import PropTypes from 'prop-types';
import ViewStyled from './styles';

const container = props => <ViewStyled {...props} />;

container.defaultProps = {
  paddingRight: 24,
  paddingLeft: 24,
};

container.propTypes = {
  bgColor: PropTypes.string,
  paddingRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default container;
