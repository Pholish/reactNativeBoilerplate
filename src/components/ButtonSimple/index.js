import React from 'react';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback } from 'react-native';

import { ViewStyled, TextStyled } from './styles';

const buttonSimple = props => {
  const { buttonProps, textProps, children } = props;
  const { onPress, ...restButtonProps } = buttonProps;
  return (
    <ViewStyled {...restButtonProps}>
      <TouchableWithoutFeedback onPress={onPress}>
        <TextStyled {...textProps}>{children}</TextStyled>
      </TouchableWithoutFeedback>
    </ViewStyled>
  );
};

buttonSimple.defaultProps = {
  buttonProps: {},
  textProps: {},
  children: '',
};

buttonSimple.propTypes = {
  buttonProps: PropTypes.object,
  textProps: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
};

export default buttonSimple;
