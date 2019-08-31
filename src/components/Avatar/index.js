import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

const avatar = ({ size, ...restProps }) => (
  <Image {...restProps} style={{ width: size, height: size, borderRadius: size / 2 }} />
);

avatar.defaultProps = {
  size: 20,
};

avatar.propTypes = {
  size: PropTypes.number,
};

export default avatar;
