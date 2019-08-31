import React from 'react';
import PropTypes from 'prop-types';

import colors from '../../constants/colors';
import {ViewStyled, SearchIconStyled, StyledInput} from './styles';

const searchInput = props => {
  const {viewProps, inputProps} = props;

  return (
    <ViewStyled {...viewProps}>
      <SearchIconStyled />

      <StyledInput
        placeholderTextColor={colors.mainSearchInputsPlaceholder}
        {...inputProps}
        error
      />
    </ViewStyled>
  );
};

searchInput.defaultProps = {
  viewProps: {},
  labelProps: {},
  inputProps: {},
  helperText: '',
  error: false,
};

searchInput.propTypes = {
  viewProps: PropTypes.object,
  labelProps: PropTypes.object,
  inputProps: PropTypes.object,
  helperText: PropTypes.string,
  error: PropTypes.bool,
};

export default searchInput;
