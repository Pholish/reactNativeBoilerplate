import React from 'react';
import PropTypes from 'prop-types';

import { ViewStyled, StyledLabel, StyledInput, HelperText } from './styles';

const input = props => {
  const { viewProps, labelProps, inputProps, helperText, error } = props;

  return (
    <ViewStyled {...viewProps}>
      <StyledLabel {...labelProps} />
      <StyledInput {...inputProps} error />
      {!!helperText && error && <HelperText error={error}>{helperText}</HelperText>}
    </ViewStyled>
  );
};

input.defaultProps = {
  viewProps: {},
  labelProps: {},
  inputProps: {},
  helperText: '',
  error: false,
};

input.propTypes = {
  viewProps: PropTypes.object,
  labelProps: PropTypes.object,
  inputProps: PropTypes.object,
  helperText: PropTypes.string,
  error: PropTypes.bool,
};

export default input;
