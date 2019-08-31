import React from 'react';
import PropTypes from 'prop-types';
import CodeFiled from 'react-native-confirmation-code-field';

import { ViewStyled, HelperText, styles } from './styles';

/**
 * help customize Cells.
 * @param {number} index unique number of cell
 * @param {boolean} isFocused is cell in focus now
 * @param {boolean} hasValue is cell has value
 * @return {object} ?TextInputProps
 */
const cellPropsGen = error => {
  if (error) {
    return {
      style: [styles.input, styles.error],
    };
  }
  return {
    style: styles.input,
  };
};

const сonfirmationCodeInput = React.forwardRef((props, ref) => {
  const { helperText, error } = props;
  const containerProps = { style: styles.inputWrapStyle };

  const cellProps = cellPropsGen(error);

  return (
    <ViewStyled>
      <CodeFiled
        ref={ref}
        blurOnSubmit={false}
        codeLength={4}
        keyboardType="numeric"
        cellProps={cellProps}
        containerProps={containerProps}
        space={10}
        {...props}
      />
      {!!helperText && error && <HelperText error={error}>{helperText}</HelperText>}
    </ViewStyled>
  );
});

сonfirmationCodeInput.defaultProps = {
  helperText: '',
  error: false,
};

сonfirmationCodeInput.propTypes = {
  helperText: PropTypes.string,
  error: PropTypes.bool,
};

export default сonfirmationCodeInput;
