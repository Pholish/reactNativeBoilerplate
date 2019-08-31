import React from 'react';
import PropTypes from 'prop-types';

import { ViewStyled, StyledLabel, StyledInput } from './styles';

import colors from '../../constants/colors';

const maskedInput = props => {
  const { viewProps, labelProps, inputProps, options } = props;
  return (
    <ViewStyled {...viewProps}>
      <StyledLabel {...labelProps} />
      <StyledInput
        options={options}
        type="custom"
        keyboardType="number-pad"
        placeholderTextColor={colors.mainInputPlaceholder}
        editable={!inputProps.disabled}
        {...inputProps}
      />
    </ViewStyled>
  );
};

maskedInput.defaultProps = {
  viewProps: {},
  labelProps: {},
  inputProps: {},
  options: { mask: '+380 99 999 99 99' },
};

maskedInput.propTypes = {
  viewProps: PropTypes.object,
  labelProps: PropTypes.object,
  inputProps: PropTypes.object,
  options: PropTypes.object,
};

export default maskedInput;
