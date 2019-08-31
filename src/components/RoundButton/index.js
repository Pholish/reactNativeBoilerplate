import React from 'react';
import PropTypes from 'prop-types';

import { ButtonStyled, TextStyled, LinearGradienStyled } from './styles';

import colors from '../../constants/colors';

const roundButton = props => {
  const { buttonProps, textProps, gradientProps, children } = props;
  const buttonBgColor = buttonProps.disabled
    ? colors.mainButtonDisabledBg
    : buttonProps.bgColor || colors.mainButtonBg;
  const btnProps = { bgColor: buttonBgColor, ...buttonProps };
  return (
    <ButtonStyled {...btnProps}>
      {gradientProps && <LinearGradienStyled {...gradientProps} />}
      <TextStyled {...textProps}>{children}</TextStyled>
    </ButtonStyled>
  );
};

roundButton.defaultProps = {
  buttonProps: {},
  textProps: {},
  children: '',
};

roundButton.propTypes = {
  buttonProps: PropTypes.object,
  textProps: PropTypes.object,
  gradientProps: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
};

export default roundButton;
