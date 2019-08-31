import React from 'react';
import PropTypes from 'prop-types';
import {
  ButtonStyled,
  IconContainer,
  TextStyled,
  LinearGradienStyled,
} from './styles';

import colors from '../../constants/colors';

const buttonWithIcon = props => {
  const {
    textProps,
    buttonProps,
    gradientProps,
    iconStyles,
    icon,
    children,
  } = props;
  const buttonBgColor = buttonProps.disabled
    ? colors.mainButtonDisabledBg
    : buttonProps.bgColor || colors.mainButtonBg;
  const btnProps = {bgColor: buttonBgColor, ...buttonProps};

  const InnerIcon = icon;
  return (
    <ButtonStyled {...btnProps}>
      {gradientProps && <LinearGradienStyled {...gradientProps} />}
      <IconContainer>
        <InnerIcon {...iconStyles} />
      </IconContainer>
      <TextStyled {...textProps}>{children}</TextStyled>
    </ButtonStyled>
  );
};

buttonWithIcon.defaultProps = {
  textProps: {},
  buttonProps: {},
  iconStyles: {},
  children: '',
};

buttonWithIcon.propTypes = {
  textProps: PropTypes.object,
  buttonProps: PropTypes.object,
  gradientProps: PropTypes.object,
  iconStyles: PropTypes.object,
  icon: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default buttonWithIcon;
